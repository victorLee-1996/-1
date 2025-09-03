<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>冷链耗材方案V2.0 - 交互式流程手册</title>
    <style>
        /* --- 全局样式与深色主题 --- */
        :root {
            --dark-bg: #0a192f;
            --light-bg: #112240;
            --lightest-bg: #233554;
            --slate: #8892b0;
            --light-slate: #a8b2d1;
            --lightest-slate: #ccd6f6;
            --accent-color: #64ffda;
            --accent-glow: rgba(100, 255, 218, 0.2);
        }

        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        
        body {
            margin: 0;
            font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: var(--dark-bg);
            color: var(--slate);
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 40px 20px;
            overflow-x: auto;
        }

        /* --- 主容器与头部 --- */
        .main-container {
            width: 100%;
            max-width: 1400px;
            text-align: center;
        }

        .header h1 {
            font-size: 2.5rem;
            font-weight: 600;
            color: var(--lightest-slate);
            margin: 0 0 10px 0;
            letter-spacing: 1px;
        }

        .header p {
            font-size: 1rem;
            color: var(--slate);
            margin: 0 0 60px 0;
        }

        /* --- 横向流程图 --- */
        .flowchart-wrapper {
            display: flex;
            align-items: center;
            width: 100%;
            padding: 20px 0;
        }

        .flow-step {
            flex: 1;
            min-width: 220px;
            background: rgba(17, 34, 64, 0.75); /* 半透明背景 */
            backdrop-filter: blur(10px); /* 玻璃拟态模糊效果 */
            border: 1px solid var(--lightest-bg);
            border-radius: 12px;
            padding: 30px 20px;
            text-align: center;
            position: relative;
            transition: all 0.3s ease-in-out;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            z-index: 10;
        }

        .flow-step:hover {
            transform: translateY(-10px) scale(1.03);
            border-color: var(--accent-color);
            box-shadow: 0 0 20px var(--accent-glow);
        }
        
        .step-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 20px auto;
            color: var(--accent-color);
        }

        .step-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--lightest-slate);
            margin-bottom: 10px;
        }

        .step-description {
            font-size: 0.85rem;
            color: var(--slate);
            margin-bottom: 25px;
            height: 50px;
        }

        .btn {
            background-color: transparent;
            color: var(--accent-color);
            border: 1px solid var(--accent-color);
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 400;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            background-color: var(--accent-glow);
        }

        /* --- 动态连接线 --- */
        .connector {
            flex: 1;
            height: 2px;
            background-color: var(--lightest-bg);
            position: relative;
            margin: 0 -20px;
        }

        .connector::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 2px;
            transform: translateY(-50%);
            background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
            background-size: 50% 100%;
            background-repeat: no-repeat;
            animation: flow 4s linear infinite;
        }

        @keyframes flow {
            0% { background-position: -100% 0; }
            100% { background-position: 200% 0; }
        }

        /* --- 模态弹窗 (Modal) --- */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0; top: 0;
            width: 100%; height: 100%;
            background-color: rgba(10, 25, 47, 0.85);
            animation: fadeIn 0.3s;
        }

        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(17, 34, 64, 0.9);
            backdrop-filter: blur(15px);
            border: 1px solid var(--lightest-bg);
            width: 90%;
            max-width: 750px;
            border-radius: 12px;
            box-shadow: 0 0 30px rgba(0,0,0,0.5);
            animation: slideIn 0.4s ease-out;
        }
        
        .modal-header {
            padding: 20px 25px;
            border-bottom: 1px solid var(--lightest-bg);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h2 { margin: 0; font-size: 1.25rem; font-weight: 600; color: var(--lightest-slate); }
        .close-btn { color: var(--slate); font-size: 2rem; font-weight: bold; cursor: pointer; transition: color 0.3s; }
        .close-btn:hover { color: var(--accent-color); }
        .modal-body { padding: 25px; line-height: 1.8; color: var(--light-slate); max-height: 65vh; overflow-y: auto; }
        .modal-body strong { color: var(--accent-color); }
        .modal-body code { background-color: var(--lightest-bg); padding: 3px 8px; border-radius: 4px; color: var(--accent-color); font-family: 'Courier New', Courier, monospace; }
        .highlight-box { background-color: rgba(35, 53, 84, 0.7); border-left: 3px solid var(--accent-color); padding: 15px 20px; margin: 20px 0; border-radius: 5px; }
        
        @keyframes fadeIn { from {opacity: 0;} to {opacity: 1;} }
        @keyframes slideIn { from {transform: translate(-50%, -45%); opacity: 0;} to {transform: translate(-50%, -50%); opacity: 1;} }

        /* --- 响应式布局 --- */
        @media (max-width: 1200px) {
            .flowchart-wrapper {
                flex-direction: column;
            }
            .connector {
                width: 2px;
                height: 60px;
                margin: -20px 0;
            }
             .connector::before {
                animation: flow-vertical 4s linear infinite;
             }
             @keyframes flow-vertical {
                0% { background: linear-gradient(180deg, transparent, var(--accent-color), transparent); background-position: 0 -100%;}
                100% { background: linear-gradient(180deg, transparent, var(--accent-color), transparent); background-position: 0 200%;}
             }
        }
    </style>
</head>
<body>

    <div class="main-container">
        <header class="header">
            <h1>冷链耗材方案V2.0 交互式流程手册</h1>
            <p>探索耗材智能推荐的全生命周期，从数据配置到最终核验。</p>
        </header>

        <div class="flowchart-wrapper">
            <div class="flow-step">
                <div class="step-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.905 59.905 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.072-1.036A59.902 59.902 0 0112 3.493a59.902 59.902 0 0110.072 5.614l-2.072 1.036m-15.482 0A50.57 50.57 0 0112 13.489a50.57 50.57 0 017.74-3.342M12 20.904v-3.342" />
                    </svg>
                </div>
                <h3 class="step-title">基础数据配置</h3>
                <p class="step-description">为系统注入决策智慧，定义耗材推荐的规则与蓝图。</p>
                <button class="btn" onclick="openModal('modal1')">查看详情</button>
            </div>

            <div class="connector"></div>

            <div class="flow-step">
                <div class="step-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V7.5a2.25 2.25 0 00-2.25-2.25H7.5A2.25 2.25 0 005.25 7.5v9.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                </div>
                <h3 class="step-title">系统智能匹配</h3>
                <p class="step-description">订单触发，系统依照优先级，在毫秒间完成最优方案决策。</p>
                <button class="btn" onclick="openModal('modal2')">查看详情</button>
            </div>

            <div class="connector"></div>

            <div class="flow-step">
                <div class="step-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                </div>
                <h3 class="step-title">仓库打包执行</h3>
                <p class="step-description">决策转化为行动，系统无缝下发指令，指导一线精准作业。</p>
                <button class="btn" onclick="openModal('modal3')">查看详情</button>
            </div>
            
            <div class="connector"></div>

            <div class="flow-step">
                <div class="step-icon">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 21z" />
                    </svg>
                </div>
                <h3 class="step-title">数据回传计费</h3>
                <p class="step-description">闭环数据流，基于精准的执行反馈，实现自动化、差异化计费。</p>
                <button class="btn" onclick="openModal('modal4')">查看详情</button>
            </div>

            <div class="connector"></div>

            <div class="flow-step">
                 <div class="step-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                    </svg>
                </div>
                <h3 class="step-title">后台查询核验</h3>
                <p class="step-description">在数据看板中追溯全链路，确保每一环节都精确无误。</p>
                <button class="btn" onclick="openModal('modal5')">查看详情</button>
            </div>
        </div>
    </div>

    <div id="modal1" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Step 1: 基础数据配置</h2>
                <span class="close-btn" onclick="closeModal('modal1')">&times;</span>
            </div>
            <div class="modal-body">
                <p><strong>操作目标：</strong> 为系统提供决策所需的所有基础规则。请在“数字化工作台”中，按顺序完成以下菜单的配置：</p>
                <ol>
                    <li><strong>温区基础数据：</strong>维护不同城市在不同日期范围的温度区域（如高温、低温）。</li>
                    <li><strong>耗材方案基础数据：</strong>定义一个具体的“打包配方”，例如：<code>1号泡沫箱*1 + 冰袋*2</code>。</li>
                    <li><strong>耗材方案组基础数据：</strong>将多个“耗材方案”组合成一个“方案组”，可分为通用或个性化方案。</li>
                    <li><strong>耗材方案组配置：</strong>将创建好的“个性化方案组”与具体的事业部进行绑定。</li>
                    <li><strong>订单结构匹配耗材基础数据：</strong>配置最精确的匹配规则，实现商家指定耗材计费。</li>
                </ol>
                <div class="highlight-box"><strong>关键提示：</strong> 数据的准确性和完整性至关重要。特别是导入数据时，请严格按照模板要求填写，并注意字段之间的逻辑校验关系（如月份和温区二选一）。</div>
            </div>
        </div>
    </div>

    <div id="modal2" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Step 2: 系统智能匹配</h2>
                <span class="close-btn" onclick="closeModal('modal2')">&times;</span>
            </div>
            <div class="modal-body">
                <p><strong>处理逻辑：</strong> 当一个满足条件的订单进入系统时，系统会<strong>按以下优先级顺序</strong>查找匹配的耗材方案：</p>
                <div class="highlight-box">
                    <strong>第一优先级：【订单结构匹配】</strong>
                    <p>精确匹配订单的 <code>省/市 + 事业部 + 商品及数量</code> 等信息。</p>
                    <p>→ 若命中：推荐<strong>唯一</strong>方案，并标记 <code>“按商家指定耗材计费” = 是</code>。</p>
                </div>
                <div class="highlight-box" style="border-left-color: #8892b0;">
                    <strong>第二优先级：【事业部个性化方案组】</strong>
                    <p>匹配订单所属事业部绑定的方案组。</p>
                    <p>→ 若命中：推荐<strong>多个</strong>可选方案，并标记 <code>“按商家指定耗材计费” = 否</code>。</p>
                </div>
                <div class="highlight-box" style="border-left-color: #8892b0;">
                    <strong>第三优先级：【通用方案组】</strong>
                    <p>匹配全局通用的方案组。</p>
                    <p>→ 若命中：推荐<strong>多个</strong>可选方案，并标记 <code>“按商家指定耗材计费” = 否</code>。</p>
                </div>
            </div>
        </div>
    </div>

    <div id="modal3" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Step 3: 方案下发与仓库打包</h2>
                <span class="close-btn" onclick="closeModal('modal3')">&times;</span>
            </div>
            <div class="modal-body">
                <p><strong>处理逻辑：</strong> 系统将匹配到的方案信息，无缝下发给WMS（仓储管理系统）。</p>
                <ul>
                    <li><strong>信息展示：</strong> 打包台清晰展示推荐的耗材方案，如：<code>方案1: 泡沫箱1号*1 + 干冰*2</code>。</li>
                    <li><strong>打包操作：</strong> 打包员根据推荐进行操作，主要依据推荐的“箱耗材”进行选择。</li>
                    <li><strong>非强制校验：</strong> 若扫描的箱耗材不在推荐范围内，系统会<strong>弹窗提示</strong>，但<strong>不强制阻断</strong>操作。</li>
                    <li><strong>自动称重：</strong> 所有新方案订单均标记为“自动称重”，无需人工干预。</li>
                </ul>
                <div class="highlight-box"><strong>注意：</strong> 您在后台配置的ERP编码，系统会自动转换为WMS可识别的8位数字编码后下发。</div>
            </div>
        </div>
    </div>
    
    <div id="modal4" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Step 4: 数据回传与计费处理</h2>
                <span class="close-btn" onclick="closeModal('modal4')">&times;</span>
            </div>
            <div class="modal-body">
                <p><strong>处理逻辑：</strong> WMS回传实际使用的耗材信息，系统根据 <code>“是否按商家指定耗材计费”</code> 标识进行差异化计费。</p>
                <div class="highlight-box">
                    <strong>当标识 = “是” (命中订单结构)</strong>
                    <p>无论仓库实际用了什么，也无论订单拆分，计费系统都<strong>严格按系统最初推荐的那一套耗材方案进行计费</strong>。</p>
                </div>
                <div class="highlight-box" style="border-left-color: #8892b0;">
                    <strong>当标识 = “否” (命中方案组)</strong>
                    <p><strong>若实操命中推荐箱型：</strong>则按该箱型对应的<strong>全套推荐耗材</strong>计费。<br>
                    <strong>若实操未命中推荐箱型：</strong>则<strong>仅按实际使用的箱耗材</strong>计费。</p>
                </div>
            </div>
        </div>
    </div>

    <div id="modal5" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Step 5: 后台查询与核验</h2>
                <span class="close-btn" onclick="closeModal('modal5')">&times;</span>
            </div>
            <div class="modal-body">
                <p><strong>操作目标：</strong> 验证流程，排查问题。</p>
                <p>您可以在以下位置查看相关信息：</p>
                <ol>
                    <li><strong>管理端 > 订单详情：</strong>
                       <ul>
                           <li>查看新增字段：<strong>“是否商家指定耗材计费”</strong>。</li>
                           <li>查看包裹实际使用的耗材明细（名称和数量）。</li>
                        </ul>
                    </li>
                    <li><strong>管理端 > 基础报表 > 销售单耗材明细查询：</strong>
                        <ul>
                            <li>此报表按最终计费逻辑展示耗材明细，是核对计费结果的最准确途径。</li>
                        </ul>
                    </li>
                </ol>
                <div class="highlight-box"><strong>核验要点：</strong> 您可以将订单详情、计费标识与本手册中的匹配和计费逻辑进行比对，以快速定位问题。</div>
            </div>
        </div>
    </div>

    <script>
        function openModal(modalId) { document.getElementById(modalId).style.display = "block"; }
        function closeModal(modalId) { document.getElementById(modalId).style.display = "none"; }
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) { event.target.style.display = "none"; }
        }
    </script>

</body>
</html>