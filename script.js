import confetti from 'https://cdn.skypack.dev/canvas-confetti';
function makeConfetti(){
    confetti({particleCount: 4, angle:  60, spread: 45, shapes: ['circle', 'square', 'square'], colors: ["03045e","0077b6","00b4d8","90e0ef","caf0f8"], scalar: 1.25, origin: { x: 0.15, y: 0.75 } });
    confetti({particleCount: 4, angle: 120, spread: 45, shapes: ['circle', 'square', 'square'], colors: ["03045e","0077b6","00b4d8","90e0ef","caf0f8"], scalar: 1.25, origin: { x: 0.85, y: 0.75 } });
    requestAnimationFrame(makeConfetti);
}
makeConfetti();
