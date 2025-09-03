// 冷链时效全景流程 - 交互脚本

document.addEventListener('DOMContentLoaded', function() {
    // 流程节点数据
    const nodeData = {
        modal1: {
            title: '外部商家ERP / 订单中心',
            details: `
                <p>流程从<strong>外部商家ERP</strong>和<strong>订单中心</strong>开始，这是所有订单的起点。</p>
                <ul>
                    <li>订单通过外部商家ERP下传至ECLP系统。</li>
                    <li>订单中心负责<strong>销售出库单的ES映射</strong>，确保单据类型正确。</li>
                    <li>当订单符合特定条件（如：非POP、冷链仓产品、B2C、承运商为京配），它将被标记为需要进行时效控单。</li>
                </ul>
            `
        },
        modal2: {
            title: 'ECLP：订单控单核心',
            details: `
                <p><strong>ECLP</strong>作为订单枢纽，负责与Promise及其他系统进行交互，执行控单决策。</p>
                <div class="highlight-box">
                    <strong>与Promise的交互：</strong>
                    <ul>
                        <li>ECLP根据配置（按仓+事业部）调用Promise的<strong>新控单接口</strong>。</li>
                        <li>ECLP需要提供订单下传时间。</li>
                    </ul>
                </div>
                <div class="highlight-box">
                    <strong>与产品中心的交互：</strong>
                    <ul>
                        <li>ECLP调用产品中心接口获取<strong>产品时效阈值</strong>，这是下传判断的重要依据。</li>
                    </ul>
                </div>
                <div class="highlight-box">
                    <strong>核心控单逻辑：</strong>
                    <ul>
                        <li><strong>基础控单条件：</strong>有订单下传时间 && 当前时间 < 订单下传时间时则控单</li>
                        <li><strong>下传条件：</strong>当前时间 > 订单下传时间才允许下传</li>
                        <li><strong>三期优化逻辑（李承昆更改）：</strong>订单下传时间 - 当前时间 ≤ 36H 则允许下传</li>
                    </ul>
                </div>
                <div class="highlight-box">
                    <strong>异常处理与强制下传：</strong>
                    <ul>
                        <li>控单订单在<strong>ECLP管理端的异常中心</strong>进行统一管理</li>
                        <li>运营人员可与仓库核实产能情况</li>
                        <li>如果确认仓库产能充足，可点击<strong>强制下传</strong>按钮将订单强制下传给仓库</li>
                        <li>强制下传功能确保在特殊情况下订单能够及时处理</li>
                    </ul>
                </div>
            `
        },
        modal3: {
            title: 'Promise：时效计算与决策引擎',
            details: `
                <p><strong>Promise</strong>是整个流程的决策引擎，它计算并返回所有关键时效数据。</p>
                <div class="highlight-box">
                    <strong>关键计算参数：</strong>
                    <ul>
                        <li>Promise结合<strong>路由时效</strong>和<strong>仓库产能</strong>，计算出：</li>
                        <li><strong>预计妥投时间</strong>：客户收到包裹的预计时间。</li>
                        <li><strong>预计出库时间</strong>：订单在仓库打包完成的预计时间。</li>
                        <li><strong>订单下传WMS时间</strong>：为确保准时出库，订单必须在此时下传到WMS。</li>
                    </ul>
                </div>
                <div class="highlight-box">
                    <strong>数据回传：</strong>
                    <ul>
                        <li>Promise将计算结果返回给ECLP，ECLP据此进行控单判断。</li>
                        <li>Promise会监听订单取消消息，以便及时释放预占的产能。</li>
                    </ul>
                </div>
            `
        },
        modal4: {
            title: '时效信息获取与耗材推荐',
            details: `
                <p>通过路由系统获取配送时效信息，为冷链订单提供精准的时效保障和耗材推荐。</p>
                <div class="highlight-box">
                    <strong>路由时效获取：</strong>
                    <ul>
                        <li>系统根据配送地址和商品特性，调用路由服务获取<strong>标准配送时效</strong>。</li>
                        <li>结合天气、交通等实时因素，动态调整配送时间预期。</li>
                        <li>为不同温区的冷链商品提供差异化的时效标准。</li>
                    </ul>
                </div>
                <div class="highlight-box">
                    <strong>耗材智能推荐：</strong>
                    <ul>
                        <li>基于商品特性、配送距离和时效要求，智能推荐合适的<strong>保温耗材</strong>。</li>
                        <li>考虑冰袋、保温箱、干冰等不同耗材的保温效果和成本。</li>
                        <li>确保商品在配送过程中保持最佳品质状态。</li>
                    </ul>
                </div>
                <div class="highlight-box">
                    <strong>运单履约标准：</strong>
                    <p>将获取的时效信息作为<strong>运单履约标准</strong>，为后续的配送执行提供明确的时间节点和品质保障要求。</p>
                </div>
            `
        },
        modal5: {
            title: '仓库生产与后续流程',
            details: `
                <p>当订单满足所有控单条件后，流程将进入最终的物流履约阶段。</p>
                <ul>
                    <li>满足条件的订单将<strong>下发至仓库WMS系统</strong>进行拣货、打包等生产活动。</li>
                    <li><strong>预计出库时间</strong>（打包时间）和<strong>仓配交接时间</strong>会下发给三合一系统，作为物流取件的开始和结束时间。</li>
                    <li>ECLP管理端会展示Promise返回的<strong>预计送达时间</strong>，供运营人员查看和核验。</li>
                </ul>
            `
        }
    };

    // 初始化模态框内容
    for (const id in nodeData) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.innerHTML = `
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>${nodeData[id].title}</h2>
                        <span class="close-btn" onclick="closeModal('${id}')">&times;</span>
                    </div>
                    <div class="modal-body">${nodeData[id].details}</div>
                </div>
            `;
        }
    }

    // 点击模态框外部关闭
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    }

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="block"]');
            if (openModal) {
                openModal.style.display = "none";
            }
        }
    });

    // Q&A 模块的交互逻辑
    const qAItems = document.querySelectorAll('.q-and-a-item');
    qAItems.forEach(item => {
        const questionBtn = item.querySelector('.q-and-a-question');
        const answerDiv = item.querySelector('.q-and-a-answer');

        questionBtn.addEventListener('click', () => {
            const isActive = questionBtn.classList.contains('active');

            // 收起所有其他已展开的项
            qAItems.forEach(otherItem => {
                const otherBtn = otherItem.querySelector('.q-and-a-question');
                const otherAnswer = otherItem.querySelector('.q-and-a-answer');
                if (otherBtn !== questionBtn) {
                    otherBtn.classList.remove('active');
                    otherAnswer.classList.remove('active');
                }
            });

            // 展开或收起当前项
            if (!isActive) {
                questionBtn.classList.add('active');
                answerDiv.classList.add('active');
            } else {
                questionBtn.classList.remove('active');
                answerDiv.classList.remove('active');
            }
        });
    });
});

// 全局函数
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}