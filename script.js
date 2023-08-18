let rotationSpeed = 0.2; // Initial rotation speed in degrees per frame
let increasingSpeed = true;

function animateStrobeEffect() {
  const spinningWheel = document.querySelector(".spinning-wheel");

  if (increasingSpeed) {
    rotationSpeed += 0.01; // Decrease rotation speed for slower spinning
    if (rotationSpeed <= 0.05) {
      // Adjust the threshold to control the transition point
      increasingSpeed = true;
    }
  } else {
    rotationSpeed -= 0.01; // Increase rotation speed for faster spinning
    if (rotationSpeed >= 5) {
      // Adjust the threshold to control the transition point
      increasingSpeed = false;
    }
  }

  const currentRotation = spinningWheel.style.transform
    ? parseFloat(spinningWheel.style.transform.match(/-?\d+/)[0])
    : 0;
  spinningWheel.style.transform = `rotate(${
    currentRotation + rotationSpeed
  }deg)`;

  requestAnimationFrame(animateStrobeEffect);
}

animateStrobeEffect();
