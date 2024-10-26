const jsTest = document.querySelector("img");

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

jsTest.addEventListener("click", () => {
  // Generate a random color
  const randomColor = getRandomColor();
  // Set the border color to the random color
  jsTest.style.borderColor = randomColor;
});
