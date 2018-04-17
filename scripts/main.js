'use strict';
window.addEventListener('load', function (e) {
  document.addEventListener('click', function (e) {
    var target = e.target;
    var content = target.nextElementSibling;
    if(content) {
      var css              = window.getComputedStyle(content, null);
      var contentMaxHeight = css.getPropertyValue('max-height');
      var contentDisplay   = css.getPropertyValue('display');
    }
    if(target.classList.contains("content-title") || target.classList.contains("inner-content-title")) {
      if(contentMaxHeight == '0px' ) {
        content.style.maxHeight = '30rem';
      } else {
        content.style.maxHeight = '0rem';
      }
    }
    if(target.classList.contains("tech-logo")) {
      if(contentDisplay == 'none') {
        content.style.display = 'grid';
        content.style.opacity = '1';
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
