import os
import sqlite3
from flask import Flask, jsonify, g, send_from_directory


APP_DIR = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(APP_DIR, 'app.db')


def get_db():
    db = getattr(g, '_db', None)
    if db is None:
        db = g._db = sqlite3.connect(DB_PATH, check_same_thread=False)
        db.row_factory = sqlite3.Row
    return db


def init_db():
    os.makedirs(APP_DIR, exist_ok=True)
    db = sqlite3.connect(DB_PATH)
    db.execute(
        """
        CREATE TABLE IF NOT EXISTS metrics (
            key TEXT PRIMARY KEY,
            value INTEGER NOT NULL
        );
        """
    )
    # ensure page_views row exists
    cur = db.execute("SELECT value FROM metrics WHERE key = ?", ("page_views",))
    row = cur.fetchone()
    if row is None:
        db.execute("INSERT INTO metrics (key, value) VALUES (?, ?)", ("page_views", 0))
    db.commit()
    db.close()


app = Flask(__name__, static_folder=None)


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_db', None)
    if db is not None:
        db.close()


@app.route('/')
def serve_index():
    return send_from_directory(APP_DIR, 'index.html')


@app.route('/index.html')
def serve_index_alias():
    return send_from_directory(APP_DIR, 'index.html')


@app.route('/<filename>')
def serve_static_files(filename):
    """Serve static files including Chinese filenames"""
    try:
        return send_from_directory(APP_DIR, filename)
    except FileNotFoundError:
        return "File not found", 404


@app.route('/api/count', methods=['GET'])
def get_count():
    db = get_db()
    cur = db.execute("SELECT value FROM metrics WHERE key = ?", ("page_views",))
    value = cur.fetchone()[0]
    return jsonify({"count": int(value)})


@app.route('/api/hit', methods=['POST', 'GET'])
def hit():
    db = get_db()
    # increment atomically within a transaction
    db.execute("UPDATE metrics SET value = value + 1 WHERE key = ?", ("page_views",))
    db.commit()
    cur = db.execute("SELECT value FROM metrics WHERE key = ?", ("page_views",))
    value = cur.fetchone()[0]
    return jsonify({"count": int(value)})


def main():
    init_db()
    port = int(os.environ.get('PORT', '5500'))
    app.run(host='0.0.0.0', port=port, debug=False)


if __name__ == '__main__':
    main()


