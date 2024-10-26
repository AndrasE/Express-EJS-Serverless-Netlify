const jsTest = document.querySelector("img");
const jsTest2 = document.querySelector(".footer");

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 100) + 155;
  const g = Math.floor(Math.random() * 100) + 155;
  const b = Math.floor(Math.random() * 100) + 155;
  return `rgb(${r}, ${g}, ${b})`;
}

jsTest.addEventListener("click", () => {
  // Generate a random color
  const randomColor = getRandomColor();
  // Set the border color to the random color
  jsTest.style.borderColor = randomColor;
  jsTest2.style.backgroundColor = randomColor;
});
