(function () {
  const style = document.createElement('style');
  style.textContent = `
    .profile-guide{margin-top:18px}.profile-guide>h2{margin:0 0 5px;color:#102a43;font-size:18px}.profile-guide>.guide-intro{margin:0 0 12px;color:#6f7f92;font-size:12px;line-height:1.65}
    .guide-block{margin:0 0 12px;border:1px solid #e1e9ef;border-radius:20px;background:#fff;box-shadow:0 8px 22px rgba(16,42,67,.05);overflow:hidden}.guide-block>summary{display:flex;align-items:center;gap:10px;padding:15px 16px;color:#102a43;font-size:14px;font-weight:800;cursor:pointer;list-style:none}.guide-block>summary::-webkit-details-marker{display:none}.guide-block>summary span{display:grid;width:34px;height:34px;place-items:center;border-radius:12px;background:#edf6ff;font-size:18px}.guide-block>summary::after{content:'＋';margin-left:auto;color:#1685bb;font-size:18px}.guide-block[open]>summary::after{content:'－'}
    .guide-content{padding:0 12px 14px}.guide-callout{display:flex;align-items:center;gap:10px;margin-bottom:10px;padding:12px;border-radius:14px;background:#fff4e8;color:#8c5019}.guide-callout strong{display:block;font-size:14px}.guide-callout small{display:block;margin-top:2px;font-size:10px}.guide-callout i{font-size:24px;font-style:normal}.declaration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.declaration-card{padding:11px;border-radius:14px}.declaration-card h3{display:flex;align-items:center;gap:5px;margin:0 0 8px;font-size:12px}.declaration-card p{display:flex;flex-wrap:wrap;gap:5px;margin:0}.declaration-card span{padding:4px 7px;border-radius:999px;background:rgba(255,255,255,.78);font-size:9px;font-weight:700;line-height:1.25}.declare{background:#fff4dc;color:#8a5a00}.allowed{background:#eaf8ef;color:#217644}.banned{background:#fff0f0;color:#a83636}.medicine{background:#edf5ff;color:#2369a2}.cash-card{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:8px;padding:10px 12px;border-radius:14px;background:#f3f0ff;color:#594397}.cash-card b{font-size:11px}.cash-card strong{font-size:15px}.limit-title{margin:13px 0 7px;color:#102a43;font-size:12px}.limit-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px}.limit-grid div{padding:9px 3px;border-radius:12px;background:#f3f7fa;text-align:center}.limit-grid b{display:block;color:#0878bd;font-size:12px}.limit-grid small{color:#6f7f92;font-size:8px}.guide-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.guide-links a{padding:8px 10px;border-radius:999px;background:#eaf4ff;color:#0878bd;font-size:11px;font-weight:700;text-decoration:none}
    .app-guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.travel-app{padding:12px;border:1px solid #e2eaf0;border-radius:16px;background:#f8fbfd}.travel-app header{display:flex;align-items:center;gap:8px}.travel-app i{display:grid;width:34px;height:34px;place-items:center;border-radius:11px;background:#fff;font-size:20px;font-style:normal;box-shadow:0 3px 10px rgba(16,42,67,.08)}.travel-app b{color:#102a43;font-size:12px}.travel-app small{display:block;margin-top:2px;color:#1685bb;font-size:9px;font-weight:700}.travel-app p{margin:8px 0 0;color:#60758b;font-size:10px;line-height:1.55}.travel-app a{color:inherit;text-decoration:none}.app-skip{margin-top:10px;padding:10px 12px;border-radius:14px;background:#f2f5f7;color:#6f7f92;font-size:11px;line-height:1.65}
    @media(max-width:380px){.app-guide-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const app = (icon, name, badge, text, url) => `<article class="travel-app"><a href="${url}" target="_blank" rel="noopener"><header><i>${icon}</i><span><b>${name}</b><small>${badge}</small></span></header><p>${text}</p></a></article>`;

  function mount() {
    const panel = document.querySelector('[data-segment-panel="my-practical"]');
    if (!panel || panel.querySelector('.profile-guide')) return;
    panel.insertAdjacentHTML('beforeend', `
      <section class="profile-guide">
        <h2>入境申报与旅行工具</h2>
        <p class="guide-intro">按这次行程精简整理。入境政策可能调整，拿不准的物品直接申报。</p>
        <details class="guide-block" open>
          <summary><span>🛂</span>澳洲入境申报速查</summary>
          <div class="guide-content">
            <div class="guide-callout"><i>⚠️</i><span><strong>拿不准 → 直接申报</strong><small>主动申报不等于没收</small></span></div>
            <div class="declaration-grid">
              <article class="declaration-card declare"><h3>🟡 需要申报</h3><p><span>肉类/乳制品</span><span>干果/坚果</span><span>茶叶/香料</span><span>蜂蜜/奶粉</span><span>羽毛/贝壳</span><span>木竹/种子</span><span>旧帐篷/脏鞋</span></p></article>
              <article class="declaration-card medicine"><h3>🔵 药品</h3><p><span>处方药</span><span>中草药</span><span>动植物成分</span><span>≤3个月用量</span><span>原包装</span><span>英文处方</span></p></article>
              <article class="declaration-card allowed"><h3>🟢 通常可带</h3><p><span>巧克力</span><span>糖果</span><span>无肉饼干</span><span>咖啡</span><span>植物油</span><span>薯片</span><span>未开封+英文标签</span></p></article>
              <article class="declaration-card banned"><h3>🔴 不要携带</h3><p><span>新鲜果蔬</span><span>生/熟肉</span><span>蛋类</span><span>土壤</span><span>活体植物</span><span>违禁品</span><span>濒危物种制品</span></p></article>
            </div>
            <div class="cash-card"><b>💵 现金达到此金额须申报</b><strong>≥ A$10,000</strong></div>
            <h3 class="limit-title">入境免税额度</h3>
            <div class="limit-grid"><div><b>A$900</b><small>成人商品</small></div><div><b>A$450</b><small>未成年商品</small></div><div><b>2.25L</b><small>酒类/成人</small></div><div><b>25支/克</b><small>烟草/成人</small></div></div>
            <div class="guide-links">
              <a href="https://www.agriculture.gov.au/travelling/bringing-mailing-goods" target="_blank" rel="noopener">官方物品查询 ↗</a>
              <a href="https://www.abf.gov.au/entering-and-leaving-australia/can-you-bring-it-in/categories/duty-free" target="_blank" rel="noopener">官方免税额度 ↗</a>
            </div>
          </div>
        </details>
        <details class="guide-block">
          <summary><span>📱</span>旅行必备 App</summary>
          <div class="guide-content">
            <div class="app-guide-grid">
              ${app('📍','Google Maps','必装','步行、公交导航和离线地图；提前收藏酒店、餐厅与购物门店。','https://maps.google.com/')}
              ${app('🚆','TripView','建议安装','查询悉尼和墨尔本公交、火车时刻及换乘。','https://tripview.com.au/')}
              ${app('🧾','Australia TRS','离境退税','提前录入航班及购物发票，机场出示二维码办理退税。','https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme')}
              ${app('译','Google Translate','必装','语音与拍照翻译；出发前下载英语离线包。','https://translate.google.com/')}
              ${app('☀️','Weatherzone','建议安装','查看悉尼、墨尔本逐小时天气与紫外线指数。','https://www.weatherzone.com.au/')}
              ${app('🎟️','Klook','按需安装','查看已订门票、集合点与电子凭证；优惠码以付款页面为准。','https://www.klook.com/')}
            </div>
            <p class="app-skip"><b>这次可不装：</b>不安排自驾和露营，Fuel Map Australia、CamperMate用不上；餐厅查询统一使用Google Maps，Zomato也可省略。</p>
          </div>
        </details>
      </section>`);
  }

  new MutationObserver(mount).observe(document.getElementById('main'), { childList: true, subtree: true });
  mount();
})();

