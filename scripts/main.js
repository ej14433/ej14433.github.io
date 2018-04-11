'use strict';
window.addEventListener('load', function (e) {
  document.addEventListener('click', function (e) {
    var target = e.target;
    if(target.className == "content-title") {
      if(target.nextElementSibling.style.maxHeight == 0 || target.nextElementSibling.style.maxHeight == '0rem') {
        target.nextElementSibling.style.maxHeight = '20rem';
      } else {
        target.nextElementSibling.style.maxHeight = '0rem';
      }  
    }
  }, false);
});
