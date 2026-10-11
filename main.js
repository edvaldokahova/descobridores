(function(){
  var fmt=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.')+' Kz';};
  var S=window.SITE||{};
  var track=function(){ if(window.fbq){ try{ window.fbq.apply(null,arguments);}catch(e){} } };

  // Preço de lançamento (opcional)
  var checkout=document.querySelector('[data-id="completo"] [data-checkout]');
  if(S.launchCompleto && S.launchCompleto < S.fullCompleto){
    var was=document.getElementById('was-completo'), now=document.getElementById('now-completo'), l=document.getElementById('launch-completo');
    was.textContent=fmt(S.fullCompleto); was.hidden=false;
    now.textContent=fmt(S.launchCompleto); l.hidden=false;
    if(checkout) checkout.dataset.value=S.launchCompleto;
  }

  // ViewContent quando o utilizador chega às ofertas
  var seen=false, offers=document.getElementById('kits');
  if('IntersectionObserver' in window && offers){
    new IntersectionObserver(function(es,o){
      es.forEach(function(e){ if(e.isIntersecting && !seen){ seen=true;
        track('ViewContent',{content_name:'Kits Pequenos Descobridores',content_category:'Kits',currency:'AOA'}); o.disconnect(); }});
    },{threshold:.25}).observe(offers);
  }

  // InitiateCheckout ao clicar num kit
  document.querySelectorAll('[data-checkout]').forEach(function(a){
    a.addEventListener('click',function(){
      var v=parseFloat(a.dataset.value)||0;
      track('InitiateCheckout',{content_name:a.dataset.name,content_type:'product',currency:'AOA',value:v,num_items:1});
    });
  });

  // Cliques no WhatsApp
  document.querySelectorAll('[data-wa]').forEach(function(a){
    a.addEventListener('click',function(){ track('Contact'); });
  });

  // Destacar a barra de navegação ao rolar
  var nav=document.querySelector('.nav');
  var onScroll=function(){ nav.classList.toggle('stuck',window.scrollY>8); };
  onScroll(); window.addEventListener('scroll',onScroll,{passive:true});
})();
