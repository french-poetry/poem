;(function () {
  var root = document.documentElement;
  var rafId = null;
  var pendingX = null;
  var pendingY = null;

  function update() {
    rafId = null;
    if (pendingX !== null && pendingY !== null) {
      root.style.setProperty('--cursor-x', pendingX + 'px');
      root.style.setProperty('--cursor-y', pendingY + 'px');
    }
  }

  window.addEventListener('mousemove', function (e) {
    pendingX = e.clientX;
    pendingY = e.clientY;
    if (rafId === null) {
      rafId = window.requestAnimationFrame(update);
    }
  }, { passive: true });

  window.addEventListener('mouseleave', function () {
    root.style.setProperty('--cursor-x', '-9999px');
    root.style.setProperty('--cursor-y', '-9999px');
  });

  // initialize off-screen
  root.style.setProperty('--cursor-x', '-9999px');
  root.style.setProperty('--cursor-y', '-9999px');
})();


