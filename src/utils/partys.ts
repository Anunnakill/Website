import confetti from "canvas-confetti";
import { assign, random } from "lodash-es";

const timeInterval = 5 * 1000;

const randomInRange = (min: number, max: number) => {
  return random() * (max - min) + min;
};

const fireworks = () => {
  const animationEnd = Date.now() + timeInterval;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99999 };
  const timer: NodeJS.Timer = setInterval(timerCallback, 250);

  function timerCallback() {
    const remainingTime = animationEnd - Date.now();
    const particleCount = 50 * (remainingTime / timeInterval);
    if (remainingTime <= 0) return clearInterval(timer);

    confetti(assign({}, defaults, { particleCount, origin: { y: random() - 0.2, x: randomInRange(0.1, 0.3) } }));
    confetti(assign({}, defaults, { particleCount, origin: { y: random() - 0.2, x: randomInRange(0.4, 0.6) } }));
    confetti(assign({}, defaults, { particleCount, origin: { y: random() - 0.2, x: randomInRange(0.7, 0.9) } }));
  }
};

const schoolPride = () => {
  const animationEnd = Date.now() + timeInterval;
  const defaults = { spread: 55, particleCount: 4, zIndex: 99999 };
  webAnimationFrame();

  function webAnimationFrame() {
    const ongoing = Date.now() < animationEnd;
    if (ongoing) requestAnimationFrame(webAnimationFrame);

    confetti(assign({}, defaults, { angle: 60, origin: { x: 0 } }));
    confetti(assign({}, defaults, { angle: 120, origin: { x: 1 } }));
  }
};

export { fireworks, schoolPride };
