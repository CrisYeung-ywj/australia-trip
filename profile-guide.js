(function () {
  const style = document.createElement('style');
  style.textContent = `
    .profile-guide{margin-top:18px}.profile-guide>h2{margin:0 0 5px;color:#102a43;font-size:18px}.profile-guide>.guide-intro{margin:0 0 12px;color:#6f7f92;font-size:12px;line-height:1.65}
    .guide-block{margin:0 0 12px;border:1px solid #e1e9ef;border-radius:20px;background:#fff;box-shadow:0 8px 22px rgba(16,42,67,.05);overflow:hidden}.guide-block>summary{display:flex;align-items:center;gap:10px;padding:15px 16px;color:#102a43;font-size:14px;font-weight:800;cursor:pointer;list-style:none}.guide-block>summary::-webkit-details-marker{display:none}.guide-block>summary span{display:grid;width:34px;height:34px;place-items:center;border-radius:12px;background:#edf6ff;font-size:18px}.guide-block>summary::after{content:'＋';margin-left:auto;color:#1685bb;font-size:18px}.guide-block[open]>summary::after{content:'－'}
    .module-sticky-head{position:sticky!important;top:0;z-index:24;margin:-2px -18px 0!important;padding:0 18px;background:rgba(246,248,251,.96);backdrop-filter:blur(16px)}.segmented.module-sticky-tabs{position:sticky!important;top:54px;z-index:23;margin:0 -6px 16px!important;box-shadow:0 8px 14px rgba(16,42,67,.05)}
    .basic-guide{margin-bottom:16px}.basic-guide .guide-content{padding-top:0}.basic-guide .utility-card,.basic-guide .info-card{margin:0 0 10px;border:0;box-shadow:none}.basic-guide .reference-links{margin:0 0 10px}.basic-guide .info-card:last-child{margin-bottom:0}
    .profile-tabs .segmented.has-outfit-tab{grid-template-columns:repeat(5,minmax(0,1fr))}.profile-tabs .segmented.has-outfit-tab button{padding:2px;font-size:9px;white-space:nowrap}
    .outfit-list{display:grid;gap:10px}.outfit-day{padding:15px 16px;border:1px solid #e1e9ef;border-radius:18px;background:#fff;box-shadow:0 5px 16px rgba(16,42,67,.045)}.outfit-date{display:flex;align-items:center;gap:7px;margin-bottom:5px;color:#0878bd}.outfit-date b{font-size:14px;line-height:1}.outfit-date small{padding:2px 6px;border-radius:999px;background:#eaf4ff;font-size:9px;font-weight:750}.outfit-copy h3{margin:0;color:#102a43;font-size:15px;line-height:1.35}.outfit-weather{margin:3px 0 10px;color:#8090a0;font-size:10px}.outfit-wear{display:flex;flex-wrap:wrap;align-items:center;gap:4px;padding:10px 12px;border-radius:12px;background:#f0f6fb;color:#123a5a}.outfit-wear:before{content:'穿';display:grid;width:22px;height:22px;flex:0 0 22px;place-items:center;border-radius:7px;background:#1685bb;color:#fff;font-size:10px;font-weight:900}.outfit-wear span{display:flex;align-items:center;color:#123a5a;font-size:13px;font-weight:850;line-height:1.4}.outfit-wear span:not(:last-child):after{content:'＋';margin-left:4px;color:#8da1b3;font-size:10px}.outfit-note{display:flex;align-items:flex-start;gap:6px;margin:9px 1px 0;color:#65788a;font-size:10px;line-height:1.55}.outfit-note:before{content:'TIP';flex:0 0 auto;margin-top:1px;color:#d57a22;font-size:8px;font-weight:900;letter-spacing:.3px}
    .guide-content{padding:0 12px 14px}.guide-callout{display:flex;align-items:center;gap:10px;margin-bottom:10px;padding:12px;border-radius:14px;background:#fff4e8;color:#8c5019}.guide-callout strong{display:block;font-size:14px}.guide-callout small{display:block;margin-top:2px;font-size:10px}.guide-callout i{font-size:24px;font-style:normal}.declaration-grid{display:grid;gap:9px}.declaration-card{padding:12px;border-radius:15px}.declaration-card h3{display:flex;align-items:center;gap:6px;margin:0 0 9px;font-size:13px}.declaration-row{display:grid;grid-template-columns:58px 1fr;gap:7px;padding:6px 0;border-top:1px solid rgba(255,255,255,.7)}.declaration-row:first-of-type{border-top:0}.declaration-row b{font-size:9px;line-height:1.55}.declaration-row p{display:flex;flex-wrap:wrap;gap:5px;margin:0}.declaration-row span{padding:4px 7px;border-radius:999px;background:rgba(255,255,255,.8);font-size:9px;font-weight:700;line-height:1.25}.declare{background:#fff4dc;color:#805300}.allowed{background:#eaf8ef;color:#217644}.banned{background:#fff0f0;color:#a83636}.limit-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px;margin-top:5px}.limit-grid div{padding:8px 2px;border-radius:10px;background:rgba(255,255,255,.82);text-align:center}.limit-grid strong{display:block;font-size:11px}.limit-grid small{font-size:8px}.guide-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.guide-links a{padding:8px 10px;border-radius:999px;background:#eaf4ff;color:#0878bd;font-size:11px;font-weight:700;text-decoration:none}
    .app-guide-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.travel-app{padding:12px;border:1px solid #e2eaf0;border-radius:16px;background:#f8fbfd}.travel-app header{display:flex;align-items:center;gap:8px}.travel-app i{display:grid;width:34px;height:34px;place-items:center;border-radius:11px;background:#fff;font-size:20px;font-style:normal;box-shadow:0 3px 10px rgba(16,42,67,.08)}.travel-app b{color:#102a43;font-size:12px}.travel-app small{display:block;margin-top:2px;color:#1685bb;font-size:9px;font-weight:700}.travel-app p{margin:8px 0 0;color:#60758b;font-size:10px;line-height:1.55}.travel-app a{color:inherit;text-decoration:none}.app-skip{margin-top:10px;padding:10px 12px;border-radius:14px;background:#f2f5f7;color:#6f7f92;font-size:11px;line-height:1.65}
    @media(max-width:380px){.app-guide-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  const app = (icon, name, badge, text, url) => `<article class="travel-app"><a href="${url}" target="_blank" rel="noopener"><header><i>${icon}</i><span><b>${name}</b><small>${badge}</small></span></header><p>${text}</p></a></article>`;

  const clothing = [
    '冲锋衣（防风防水）×1','薄羽绒（可压缩）×1','防晒衣或薄长袖 ×1','短袖 T恤 ×4','长袖／卫衣 ×2','长裤（含1条速干）×3','短裤 ×1–2','防水舒适步行鞋 ×1','折叠伞 ×1','防晒霜 ×1','大围巾 ×1','内衣&内裤 ×6套（中途洗1次）','袜子 ×6双（中途洗1次）','拖鞋 ×1','帽子 ×1','墨镜 ×1'
  ];
  const outfits = [
    ['9/25','周五','广州 → 香港转机','33°/25° · 雷阵雨边缘',['短袖','速干裤','随身薄外套'],'机上空调偏冷，薄外套随身。'],
    ['9/26','周六','悉尼市区购物与巴兰加鲁日落','29°/17° · 晴，傍晚或有阵雨',['短袖','短裤或长裤','薄外套','折叠伞'],'晚间降温，去巴兰加鲁前加外套。'],
    ['9/27','周日','观鲸、岩石区与环形码头','21°/15° · 多云，阵雨60%',['短袖','薄羽绒','冲锋衣','长裤'],'海上风寒明显，相机注意防水。'],
    ['9/28','周一','东部海滩与沃森湾','21°/14° · 多云，阵雨50%',['长袖','薄羽绒','冲锋衣','长裤'],'雨停或中午回暖时可脱最外层。'],
    ['9/29','周二','Kiama 与 Gerringong 海岸线','20–21°/13–14° · 云渐散',['短袖','冲锋衣','长裤'],'草坡与海边风大，早晚务必穿外套。'],
    ['9/30','周三','悉尼市区人文购物线','22°/12° · 阴',['短袖或长袖','薄外套','长裤'],'商场内外温差较大，方便穿脱。'],
    ['10/1','周四','悉尼飞墨尔本与市区活动','悉尼28° → 墨尔本23°/11°',['短袖','长裤','冲锋衣'],'白天短袖，抵达墨尔本后加冲锋衣。'],
    ['10/2','周五','大洋路与十二门徒','14°/8° · 雨，海风大',['长袖','薄羽绒','冲锋衣','长裤','防水鞋'],'全程最冷，按三层完整穿着。'],
    ['10/3','周六','蒸汽火车与菲利普岛企鹅归巢','14°/5° · 晴，夜间约11°',['长袖','薄羽绒','冲锋衣','长裤','大围巾'],'清晨和企鹅岛夜间都要重点保暖。'],
    ['10/4','周日','墨尔本市区与南墨尔本市场','16°/8° · 晴，UV较高',['短袖','冲锋衣','长裤','墨镜','帽子'],'晴天仍偏凉，注意防晒；当天进入夏令时。'],
    ['10/5','周一','墨尔本 → 香港 → 广州返程','墨尔本22° → 香港28°',['短袖','薄外套','长裤'],'厚衣装箱底，薄外套留在随身行李。']
  ];

  function outfitContent() {
    return '<div class="outfit-list">'+outfits.map(day=>'<article class="outfit-day"><div class="outfit-date"><b>'+day[0]+'</b><small>'+day[1]+'</small></div><div class="outfit-copy"><h3>'+day[2]+'</h3><p class="outfit-weather">'+day[3]+'</p><div class="outfit-wear">'+day[4].map(item=>'<span>'+item+'</span>').join('')+'</div><p class="outfit-note">'+day[5]+'</p></div></article>').join('')+'</div>';
  }

  function enhanceProfile() {
    const tabs = document.querySelector('.profile-tabs .segmented');
    const shell = tabs?.closest('.segment-shell');
    if (!tabs || !shell) return;
    if (!tabs.querySelector('[data-segment="my-outfits"]')) {
      tabs.insertAdjacentHTML('beforeend','<button role="tab" data-segment="my-outfits" aria-selected="false">穿搭建议</button>');
      shell.insertAdjacentHTML('beforeend','<section class="segment-panel" data-segment-panel="my-outfits" hidden>'+outfitContent()+'</section>');
      tabs.classList.add('has-outfit-tab');
    }
    const luggagePanel = shell.querySelector('[data-segment-panel="my-luggage"]');
    const group = [...(luggagePanel?.querySelectorAll('.luggage-group') || [])].find(item=>item.querySelector('h2')?.textContent.includes('衣物与穿搭'));
    if (group && !group.classList.contains('clothing-updated')) {
      let saved = {};
      try { saved = JSON.parse(localStorage.getItem('au-mobile-checks-v2') || '{}'); } catch {}
      group.classList.add('clothing-updated');
      group.innerHTML = '<h2>衣物与穿搭<small>'+clothing.length+'项</small></h2>'+clothing.map((item,index)=>'<label><input type="checkbox" data-check="luggage-clothing-'+index+'" '+(saved['luggage-clothing-'+index]?'checked':'')+'><span>'+item+'</span></label>').join('');
      const intro = luggagePanel.querySelector('.tab-intro');
      if (intro) intro.textContent = '共'+luggagePanel.querySelectorAll('.luggage-group label').length+'项 · 勾选状态仅保存在当前手机';
    }
  }

  function mount() {
    enhanceProfile();
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

