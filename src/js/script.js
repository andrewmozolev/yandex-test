(function() {
  var loginBtn = document.querySelector('#btn-login');
  var loginPopupClose = document.querySelector('#btn-login-close');
  var loginPopup = document.querySelector('#popup-login');

  loginBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    loginPopup.classList.add('active');
    document.body.classList.add('active');
    disableScroll();
  });

  loginPopupClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    loginPopup.classList.remove('active');
    document.body.classList.remove('active');
    enableScroll();
  });



  var keys = {37: 1, 38: 1, 39: 1, 40: 1};

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
  }

  function preventDefaultForScrollKeys(e) {
      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }

  function disableScroll() {
    if (window.addEventListener)
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault;
    window.onmousewheel = document.onmousewheel = preventDefault;
    window.ontouchmove  = preventDefault;
    document.onkeydown  = preventDefaultForScrollKeys;
  }

  function enableScroll() {
      if (window.removeEventListener)
          window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
  }
})();