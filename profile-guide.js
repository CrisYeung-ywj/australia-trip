(function () {
  const style = document.createElement('style');
  style.textContent = `
    .profile-guide{margin-top:18px}.profile-guide>h2{margin:0 0 5px;color:#102a43;font-size:18px}.profile-guide>.guide-intro{margin:0 0 12px;color:#6f7f92;font-size:12px;line-height:1.65}
    .guide-block{margin:0 0 12px;border:1px solid #e1e9ef;border-radius:20px;background:#fff;box-shadow:0 8px 22px rgba(16,42,67,.05);overflow:hidden}.guide-block>summary{display:flex;align-items:center;gap:10px;padding:15px 16px;color:#102a43;font-size:14px;font-weight:800;cursor:pointer;list-style:none}.guide-block>summary::-webkit-details-marker{display:none}.guide-block>summary span{display:grid;width:34px;height:34px;place-items:center;border-radius:12px;background:#edf6ff;font-size:18px}.guide-block>summary::after{content:'＋';margin-left:auto;color:#1685bb;font-size:18px}.guide-block[open]>summary::after{content:'－'}
    .module-sticky-head{position:sticky!important;top:0;z-index:24;margin:-2px -18px 0!important;padding:0 18px;background:rgba(246,248,251,.96);backdrop-filter:blur(16px)}.segmented.module-sticky-tabs{position:sticky!important;top:54px;z-index:23;margin:0 -6px 16px!important;box-shadow:0 8px 14px rgba(16,42,67,.05)}
    .basic-guide{margin-bottom:16px}.basic-guide .guide-content{padding-top:0}.basic-guide .utility-card,.basic-guide .info-card{margin:0 0 10px;border:0;box-shadow:none}.basic-guide .reference-links{margin:0 0 10px}.basic-guide .info-card:last-child{margin-bottom:0}
    .guide-content{padding:0 12px 14px}.guide-callout{display:flex;align-items:center;gap:10px;margin-bottom:10px;padding:12px;border-radius:14px;background:#fff4e8;color:#8c5019}.guide-callout strong{display:block;font-size:14px}.guide-callout small{display:block;margin-top:2px;font-size:10px}.guide-callout i{font-size:24px;font-style:normal}.declaration-grid{display:grid;gap:9px}.declaration-card{padding:12px;border-radius:15px}.declaration-card h3{display:flex;align-items:center;gap:6px;margin:0 0 9px;font-size:13px}.declaration-row{display:grid;grid-template-columns:58px 1fr;gap:7px;padding:6px 0;border-top:1px solid rgba(255,255,255,.7)}.declaration-row:first-of-type{border-top:0}.declaration-row b{font-size:9px;line-height:1.55}.declaration-row p{display:flex;flex-wrap:wrap;gap:5px;margin:0}.declaration-row span{padding:4px 7px;border-radius:999px;background:rgba(255,255,255,.8);font-size:9px;font-weight:700;line-height:1.25}.declare{background:#fff4dc;color:#805300}.allowed{background:#eaf8ef;color:#217644}.banned{background:#fff0f0;color:#a83636}.limit-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;margin-top:5px}.limit-grid div{padding:8px 2px;border-radius:10px;background:rgba(255,255,255,.82);text-align:center}.limit-grid strong{display:block;font-size:11px}.limit-grid small{font-size:8px}.guide-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.guide-links a{padding:8px 10px;border-radius:999px;background:#eaf4ff;color:#0878bd;font-size:11px;font-weight:700;text-decoration:none}
    .app-guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.travel-app{padding:12px;border:1px solid #e2eaf0;border-radius:16px;background:#f8fbfd}.travel-app header{display:flex;align-items:center;gap:8px}.travel-app i{display:grid;width:34px;height:34px;place-items:center;border-radius:11px;background:#fff;font-size:20px;font-style:normal;box-shadow:0 3px 10px rgba(16,42,67,.08)}.travel-app b{color:#102a43;font-size:12px}.travel-app small{display:block;margin-top:2px;color:#1685bb;font-size:9px;font-weight:700}.travel-app p{margin:8px 0 0;color:#60758b;font-size:10px;line-height:1.55}.travel-app a{color:inherit;text-decoration:none}.app-skip{margin-top:10px;padding:10px 12px;border-radius:14px;background:#f2f5f7;color:#6f7f92;font-size:11px;line-height:1.65}
    @media(max-width:380px){.app-guide-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const app = (icon, name, badge, text, url) => `<article class="travel-app"><a href="${url}" target="_blank" rel="noopener"><header><i>${icon}</i><span><b>${name}</b><small>${badge}</small></span></header><p>${text}</p></a></article>`;

  function mount() {
    const currentView = location.hash.slice(1);
    if (currentView === 'profile' || currentView === 'shop-photo') {
      const main = document.getElementById('main');
      main.querySelector('.module-page-head')?.classList.add('module-sticky-head');
      main.querySelector('.segmented')?.classList.add('module-sticky-tabs');
    }
    const panel = document.querySelector('[data-segment-panel="my-practical"]');
    if (!panel || panel.querySelector('.profile-guide')) return;
    const practicalParts = [...panel.children].filter(node => node.matches('.utility-card, .reference-links, .info-card'));
    if (practicalParts.length) {
      const basic = document.createElement('details');
      basic.className = 'guide-block basic-guide';
      basic.innerHTML = '<summary><span>ℹ️</span>基础实用信息</summary><div class="guide-content"></div>';
      panel.insertBefore(basic, practicalParts[0]);
      const content = basic.querySelector('.guide-content');
      practicalParts.forEach(node => content.appendChild(node));
    }
    panel.insertAdjacentHTML('beforeend', `
      <section class="profile-guide">
        <h2>入境申报与旅行工具</h2>
        <p class="guide-intro">按这次行程精简整理。入境政策可能调整，拿不准的物品直接申报。</p>
        <details class="guide-block" open>
          <summary><span>🛂</span>澳洲入境申报速查</summary>
          <div class="guide-content">
            <div class="guide-callout"><i>⚠️</i><span><strong>拿不准 → 直接申报</strong><small>主动申报不等于没收</small></span></div>
            <div class="declaration-grid">
              <article class="declaration-card declare">
                <h3>🟡 必须申报物品</h3>
                <div class="declaration-row"><b>食品类</b><p><span>肉类/乳制品</span><span>干果/坚果</span><span>茶叶/香料</span><span>蜂蜜/奶粉</span></p></div>
                <div class="declaration-row"><b>药品类</b><p><span>处方药</span><span>中草药</span><span>动植物成分药</span><span>原包装</span><span>≤3个月用量</span></p></div>
                <div class="declaration-row"><b>天然制品</b><p><span>羽毛/贝壳</span><span>木竹制品</span><span>干花/种子</span><span>旧帐篷/脏鞋</span></p></div>
                <div class="declaration-row"><b>超过额度</b><p><span>现金≥A$10,000</span><span>烟草&gt;25支/克</span><span>酒类&gt;2.25L</span></p></div>
              </article>
              <article class="declaration-card allowed">
                <h3>🟢 无需申报物品</h3>
                <div class="declaration-row"><b>包装食品</b><p><span>巧克力</span><span>糖果</span><span>无肉饼干</span><span>咖啡</span><span>植物油</span><span>薯片</span><span>未开封+英文标签</span></p></div>
                <div class="declaration-row"><b>日常用品</b><p><span>干净衣鞋</span><span>化妆洗护</span><span>手机/电脑</span><span>相机</span></p></div>
                <div class="declaration-row"><b>额度以内</b><div class="limit-grid"><div><strong>A$900</strong><small>成人商品</small></div><div><strong>A$450</strong><small>未成年商品</small></div><div><strong>2.25L</strong><small>酒类/成人</small></div><div><strong>25支/克</strong><small>烟草/成人</small></div></div></div>
              </article>
              <article class="declaration-card banned">
                <h3>🔴 绝对禁止携带物品</h3>
                <div class="declaration-row"><b>高危食品</b><p><span>新鲜果蔬</span><span>生肉/熟肉</span><span>蛋类</span><span>非商业包装乳制品</span></p></div>
                <div class="declaration-row"><b>动植物</b><p><span>土壤</span><span>活体植物</span><span>无许可濒危物种制品</span></p></div>
                <div class="declaration-row"><b>违禁品</b><p><span>毒品</span><span>武器</span><span>假冒商品</span><span>含违禁成分中药</span></p></div>
              </article>
            </div>
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
  window.addEventListener('hashchange', mount);
  mount();
})();

