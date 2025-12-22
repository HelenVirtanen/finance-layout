const slider = document.getElementById("slider");
const rangeValue = document.querySelector(".range-value");

slider.addEventListener("input", () => {
  rangeValue.textContent = slider.value + "%";
});
