document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.poem-scroll-down');
  if (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // Scroll plus lentement (1 seconde)
      const start = window.scrollY;
      const end = start + window.innerHeight;
      const duration = 600; // 1 seconde
      const startTime = performance.now();
      function animateScroll(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, start + (end - start) * progress);
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }
      requestAnimationFrame(animateScroll);
    });
  }
}); 