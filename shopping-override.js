'use strict';
(()=>{
 const xhs='https://www.xiaohongshu.com/discovery/item/67a6e064000000001801b421';
 const photoInfo={
  'shop-mini':{src:'assets/mini-meeq.webp',title:'Mini MeeQ Sydney',note:'Westfield Sydney Level 1',source:'https://meeq.com.au/'},
  'shop-paddys':{src:'assets/shop/paddys-460.webp',title:"Paddy’s Markets · 460 Sydney Souvenirs",note:'Haymarket · Ground Floor · Shop 460',source:'https://www.sydneysouvenirs.com.au/locations'},
  'shop-arcteryx':{src:'assets/shop/arcteryx-galeries.webp',title:'Arc’teryx · The Galeries',note:'The Galeries · 500 George Street',source:'https://www.thegaleries.com/stores/arcteryx'},
  'shop-ugg':{src:'assets/shop/ugg-galeries.webp',title:'The UGG Shop · The Galeries',note:'The Galeries · Sydney CBD',source:'https://theuggshop.com.au/pages/the-ugg-the-galeries-sydney'},
  'shop-coles':{src:'assets/coles.jpg',title:'Coles Central Wynyard Express',note:'Wynyard St & Carrington St',source:'https://www.coles.com.au/find-stores/coles/nsw/central-wynyard-express-840'},
  'snack-nutella':{src:'assets/shop/coles-snack-1.webp',title:'Nutella B-ready',note:'Coles 零食清单',source:xhs},
  'snack-natural':{src:'assets/shop/coles-snack-3.webp',title:'The Natural Fruit Salad 水果软糖',note:'Coles 零食清单',source:xhs},
  'snack-byron':{src:'assets/shop/coles-snack-4.webp',title:'Byron Bay Cookies 曲奇',note:'Coles 零食清单',source:xhs},
  'snack-sunbites':{src:'assets/shop/coles-snack-5.webp',title:'Sunbites Grain Waves 薯片',note:'Coles 零食清单',source:xhs},
  'snack-timtam':{src:'assets/shop/coles-snack-6.webp',title:'Tim Tam 巧克力饼干',note:'Coles 零食清单',source:xhs},
  'snack-walkers':{src:'assets/shop/coles-snack-7.webp',title:'Walker’s 黄油饼干',note:'Coles 零食清单',source:xhs},
  'snack-redseal':{src:'assets/shop/coles-snack-8.webp',title:'Red Seal 水果茶',note:'Coles 零食清单',source:xhs}
 };
 const items=[
  {time:'9/26 · 下午',name:'Mini MeeQ Sydney',photo:'shop-mini',map:'Mini MeeQ Sydney Westfield Sydney',text:'Westfield Sydney Level 1，重点看澳洲限定 Sanrio 与 Hello Kitty。',must:[['澳洲限定 Koala & Roo Hello Kitty','shop-mini'],['Sanrio 收藏品／盲盒','shop-mini'],['Jellycat 与 Miffy 礼物','shop-mini']]},
  {time:'9/30 · 17:35–18:00',name:"Paddy’s Markets · 460号手信店",photo:'shop-paddys',map:"460 Sydney Souvenirs Paddy's Market Haymarket",text:'主要购买手信；到地面层 Shop 460（Thomas St 与 Hay St 转角），店名 460 Sydney Souvenirs。',must:[['澳洲冰箱贴／钥匙扣','shop-paddys'],['袋鼠、考拉与Quokka纪念品','shop-paddys'],['澳洲主题帆布袋／帽子','shop-paddys']]},
  {time:'9/30 · 下午',name:'Arc’teryx · The Galeries',photo:'shop-arcteryx',map:"Arc'teryx The Galeries 500 George Street Sydney",text:'9/30市区购物线门店，位于The Galeries；按现场库存查看款式与尺码。',must:[['到店查看当季款式与尺码','shop-arcteryx']]},
  {time:'9/30 · 下午',name:'The UGG Shop · The Galeries',photo:'shop-ugg',map:'The UGG Shop The Galeries Sydney',text:'与始祖鸟同在The Galeries购物段；认准 The UGG Shop 门店。',must:[['Australian Made 系列','shop-ugg'],['Classic Boots／Slippers','shop-ugg']]},
  {time:'悉尼期间 · 补货',name:'Coles · 保健品与零食',photo:'shop-coles',map:'Coles Central Wynyard Express',text:'购买鱼油、Swisse保健品及帖子推荐零食；零食按包装图在货架寻找，优先看当日折扣。',must:[['鱼油（按需要选择规格）','shop-coles'],['Swisse 保健品（按需要选择品类）','shop-coles'],['The Natural Fruit Salad 水果软糖','snack-natural'],['Byron Bay Cookies 曲奇','snack-byron'],['Sunbites Grain Waves 薯片','snack-sunbites'],['Tim Tam 各种口味','snack-timtam'],['Walker’s 黄油饼干','snack-walkers'],['Red Seal 水果茶','snack-redseal'],['Nutella B-ready 饼干','snack-nutella']]}
 ];
 const card=item=>'<article class="shop-card"><div class="shop-image"><button data-shop-photo="'+item.photo+'"><img src="'+photoInfo[item.photo].src+'" alt="'+item.name+'" loading="lazy"></button><a class="nav-pill" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(item.map)+'">导航</a></div><div class="shop-body"><small>'+item.time+'</small><h2>'+item.name+'</h2><p>'+item.text+'</p><details class="must-buy"><summary>查看必买清单</summary>'+item.must.map(row=>'<p><button data-shop-photo="'+row[1]+'"><img src="'+photoInfo[row[1]].src+'" alt=""></button><span>'+row[0]+'</span></p>').join('')+'</details></div></article>';
 function apply(){const grid=document.querySelector('.shop-card-grid');if(!grid||grid.dataset.shopOverride)return;grid.dataset.shopOverride='true';grid.innerHTML=items.map(card).join('');}
 new MutationObserver(apply).observe(document.body,{childList:true,subtree:true});
 apply();
 document.addEventListener('click',event=>{
  const button=event.target.closest('[data-shop-photo]');if(!button)return;
  event.preventDefault();event.stopImmediatePropagation();
  const info=photoInfo[button.dataset.shopPhoto];
  document.querySelector('#photo-title').textContent=info.title;
  document.querySelector('#photo-large').src=info.src;
  document.querySelector('#photo-large').alt=info.title;
  document.querySelector('#photo-english').textContent=info.note;
  const source=document.querySelector('#photo-source');source.hidden=false;source.href=info.source;source.textContent='图片来源 ↗';
  document.querySelector('#photo-dialog').showModal();
 },true);
})();

