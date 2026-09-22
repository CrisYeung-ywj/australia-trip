(function () {
  const style = document.createElement('style');
  style.textContent = `
    .profile-guide{margin-top:18px}.profile-guide>h2{margin:0 0 5px;color:#102a43;font-size:18px}.profile-guide>.guide-intro{margin:0 0 12px;color:#6f7f92;font-size:12px;line-height:1.65}
    .guide-block{margin:0 0 12px;border:1px solid #e1e9ef;border-radius:20px;background:#fff;box-shadow:0 8px 22px rgba(16,42,67,.05);overflow:hidden}.guide-block>summary{display:flex;align-items:center;gap:10px;padding:15px 16px;color:#102a43;font-size:14px;font-weight:800;cursor:pointer;list-style:none}.guide-block>summary::-webkit-details-marker{display:none}.guide-block>summary span{display:grid;width:34px;height:34px;place-items:center;border-radius:12px;background:#edf6ff;font-size:18px}.guide-block>summary::after{content:'＋';margin-left:auto;color:#1685bb;font-size:18px}.guide-block[open]>summary::after{content:'－'}
    .guide-content{padding:0 16px 16px}.guide-content h3{margin:12px 0 5px;color:#102a43;font-size:13px}.guide-content p,.guide-content li{color:#52677e;font-size:12px;line-height:1.7}.guide-content ul{margin:0;padding-left:18px}.guide-alert{padding:10px 12px;border-radius:12px;background:#fff4e8;color:#9a5517!important}.guide-danger{padding:10px 12px;border-radius:12px;background:#fff0f0;color:#aa3333!important}.guide-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.guide-links a{padding:8px 10px;border-radius:999px;background:#eaf4ff;color:#0878bd;font-size:11px;font-weight:700;text-decoration:none}
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
            <p class="guide-alert"><b>最重要：</b>食品、药品、动植物制品，以及去过农场或沾过泥土的鞋具，无法确认时一律申报。申报不等于没收。</p>
            <h3>需要申报</h3>
            <ul>
              <li>肉类、香肠、含肉食品、乳制品、干果、坚果、茶叶、香料、蜂蜜及婴儿奶粉。</li>
              <li>处方药、中草药及含动植物成分药品；个人药量建议不超过3个月，并保留原包装、英文处方或说明。</li>
              <li>羽毛、贝壳、珊瑚、皮革、木竹制品、干花、种子，以及使用过的帐篷和登山鞋。</li>
              <li>现金合计达到或超过 A$10,000；烟草超过25支或25克；酒类超过2.25升。</li>
            </ul>
            <h3>通常可携带，但要看包装与成分</h3>
            <p>未开封、商业包装且有英文标签的巧克力、糖果、无肉饼干、咖啡、植物油和薯片通常风险较低；最终以现场检查及BICON条件为准。</p>
            <h3>不要携带</h3>
            <p class="guide-danger">新鲜水果蔬菜、生肉或熟肉、蛋类、土壤、活体植物、毒品、武器、假冒商品，以及无许可的濒危物种制品。</p>
            <h3>免税额度</h3>
            <p>一般商品：成人 A$900、未成年人 A$450；18岁以上酒类2.25升、烟草25支或25克。超过额度应申报。</p>
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

