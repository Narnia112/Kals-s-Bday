import confetti from 'https://cdn.skypack.dev/canvas-confetti';
function makeConfetti(){
    confetti({particleCount: 3, ticks: 50, angle:  60, spread: 45, shapes: ['circle', 'square', 'square'], colors: ["0077b6","00b4d8","90e0ef"], scalar: 1.25, origin: { x: 0, y: 0.75 } });
    confetti({particleCount: 3, ticks: 50, angle: 120, spread: 45, shapes: ['circle', 'square', 'square'], colors: ["0077b6","00b4d8","90e0ef"], scalar: 1.25, origin: { x: 1, y: 0.75 } });
    requestAnimationFrame(makeConfetti);
}
makeConfetti();
