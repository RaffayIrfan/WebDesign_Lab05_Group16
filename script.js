const jsConfetti = new JSConfetti();

document.addEventListener('DOMContentLoaded', () => {
    const confettiButton = document.getElementById('myConfettiButton');

    confettiButton.addEventListener('click', () => {
      // Basic confetti burst
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    }).then(() => jsConfetti.addConfetti())

      // You can customize the confetti effect with options
      // confetti({
      //   particleCount: 100,
      //   spread: 70,
      //   origin: { y: 0.6 }
      // });
    });
  });