'use strict';
window.addEventListener('load', function (e) {
  document.addEventListener('click', function (e) {
    var target = e.target;


    if(target.classList.contains("content-title")) {
      if(target.nextElementSibling.style.maxHeight == 0 || target.nextElementSibling.style.maxHeight == '0rem') {
        target.nextElementSibling.style.maxHeight = '30rem';
      } else {
        target.nextElementSibling.style.maxHeight = '0rem';
      }
    }


    if(target.classList.contains("tech-logo")) {
      if(target.nextElementSibling.style.display == 'none' || target.nextElementSibling.style.display == '') {
        target.nextElementSibling.style.display = 'grid';
        target.nextElementSibling.style.opacity = '1';
      }
    }
    if(target.classList.contains("logo-overlay") || target.classList.contains("logo-overlay-text")) {
      if(target.classList.contains("logo-overlay-text")) {
        target = target.parentElement;
      }
      target.style.opacity = '0';
      setTimeout(function(){ target.style.display = 'none'; }, 500);
    }
  }, false);
});
