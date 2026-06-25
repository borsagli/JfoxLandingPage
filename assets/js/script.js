// ANIMAÇÃO NÚMEROS CRESCENDO
function animateCount(el, duration = 2000) {
  const target = parseFloat(el.dataset.target);

  if (isNaN(target)) return;

  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const decimals = parseInt(el.dataset.decimals, 10) || 0;
  const decimalSep = el.dataset.decimalSep || '.';
  const startTime = performance.now();

  function format(value) {
    let str = value.toFixed(decimals);
    if (decimalSep !== '.') str = str.replace('.', decimalSep);
    return prefix + str + suffix;
  }
  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);

    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = eased * target;

    el.textContent = format(current);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = format(target);
    }
  }

  requestAnimationFrame(update);
}

const counters = document.querySelectorAll('.stat-number, .count-up');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount(entry.target);
      obs.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));



// ================================
