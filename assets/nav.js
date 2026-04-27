/* BookSales — Navigation */
(function(){
  'use strict';
  var pages = ["page_01.html"];
  var cur = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(function(a){
    if (a.dataset.page === cur) a.classList.add('active');
  });
  document.addEventListener('keydown', function(e){
    var i = pages.indexOf(cur);
    if (e.key === 'ArrowRight' && i >= 0 && i < pages.length-1) location.href = pages[i+1];
    if (e.key === 'ArrowLeft'  && i > 0)                        location.href = pages[i-1];
  });
})();
