gsap.registerPlugin(ScrollTrigger);

function initExplode() {
  const logo = document.querySelector(".new-era-card .logo");
  const cards = gsap.utils.toArray(".new-era-card .subcard");
  if (!logo || !cards.length) return;

  const logoBox = logo.getBoundingClientRect();
  const logoCX = logoBox.left + logoBox.width / 2;
  const logoCY = logoBox.top + logoBox.height / 2;

   cards.forEach((card, i) => {
    const box = card.getBoundingClientRect();
    const cardCX = box.left + box.width / 2;
    const cardCY = box.top + box.height / 2;

    const dx = logoCX - cardCX;
    const dy = logoCY - cardCY;

    gsap.set(card, { x: dx, y: dy, scale: 0.2, opacity: 0 });
     gsap.to(card, {
      x: 0, y: 0, scale: 1, opacity: 1,
      ease: "power1.out",
      duration: 0.6,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: ".new-era-card",
        start: "top 70%",
      },
    });
  });
}
window.addEventListener("load", initExplode);
window.addEventListener("resize", () => ScrollTrigger.refresh());