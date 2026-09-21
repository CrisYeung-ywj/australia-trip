'use strict';
(()=>{
 const maleIds=Array.from({length:20},(_,i)=>'male-'+String(i+1).padStart(3,'0'));
 const path=(kind,id)=>'assets/poses/'+kind+'/'+id+'.webp';
 const article=(id,name,note,ids,kind,custom=false)=>'<article class="pose-category"><div class="pose-category-title"><div><small>POSE GUIDE</small><h2>'+name+'</h2><p>'+note+'</p></div><button class="pose-open" '+(custom?'data-male-gallery':'data-pose-gallery="'+id+'"')+'>查看全部 '+ids.length+' 张 →</button></div><div class="pose-previews">'+ids.slice(0,5).map((photo,i)=>'<button '+(custom?'data-male-photo="'+photo+'"':'data-photo="'+photo+'"')+' aria-label="放大'+name+'姿势'+(i+1)+'"><img src="'+path(kind,photo)+'" alt="'+name+'姿势参考'+(i+1)+'" loading="lazy"></button>').join('')+'</div></article>';
 function apply(){
  const shell=document.querySelector('.pose-categories');
  if(!shell||shell.dataset.poseOverride)return;
  shell.dataset.poseOverride='true';
  const solo=Array.from({length:36},(_,i)=>'solo-'+String(i+1).padStart(3,'0'));
  const couple=Array.from({length:16},(_,i)=>'couple-'+String(i+1).padStart(3,'0'));
  shell.innerHTML=article('solo','女生姿势','街道、公园与旅行场景的女生拍照姿势。',solo,'solo')+article('male','男生姿势','街拍、栏杆、长椅与旅行场景的男生姿势。',maleIds,'male',true)+article('couple','情侣姿势','小幅度万能站姿，适合街道、公园与海边。',couple,'couple');
 }
 new MutationObserver(apply).observe(document.body,{childList:true,subtree:true});
 apply();
 document.addEventListener('click',event=>{
  const gallery=event.target.closest('[data-male-gallery]');
  const photo=event.target.closest('[data-male-photo]');
  if(!gallery&&!photo)return;
  event.preventDefault();event.stopImmediatePropagation();
  if(gallery){
   document.querySelector('#pose-title').textContent='男生姿势';
   document.querySelector('#pose-note').textContent='街拍、栏杆、长椅与旅行场景的男生姿势。';
   document.querySelector('#pose-gallery').innerHTML=maleIds.map((id,i)=>'<button data-male-photo="'+id+'" aria-label="放大男生姿势'+(i+1)+'"><img src="'+path('male',id)+'" alt="男生姿势'+(i+1)+'" loading="lazy"><span>'+(i+1)+'</span></button>').join('');
   document.querySelector('#pose-source').hidden=true;
   document.querySelector('#pose-dialog').showModal();
   return;
  }
  const id=photo.dataset.malePhoto;
  const number=Number(id.slice(-3));
  if(document.querySelector('#pose-dialog').open)document.querySelector('#pose-dialog').close();
  document.querySelector('#photo-title').textContent='男生拍照姿势 '+number;
  document.querySelector('#photo-large').src=path('male',id);
  document.querySelector('#photo-large').alt='男生拍照姿势 '+number;
  document.querySelector('#photo-english').textContent='旅行男生姿势参考';
  document.querySelector('#photo-source').hidden=true;
  document.querySelector('#photo-dialog').showModal();
 },true);
})();

