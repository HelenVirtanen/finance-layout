"use strict";

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

const slider = document.getElementById("slider");
const rangeValue = document.querySelector(".range-value");

document.addEventListener("DOMContentLoaded", () => {
  /* Fixed header while scrolling */
  const checkScroll = (offset) => {
    header.classList.toggle("fixed", offset > 0);
  };

  let scrollOffset = window.pageYOffset;
  checkScroll(scrollOffset);

  window.addEventListener("scroll", () => {
    scrollOffset = window.pageYOffset;
    checkScroll(scrollOffset);
  });

  /* Nav menu toggle */
  document.addEventListener("click", (event) => {
    const target = event.target.closest("#nav_toggle");
    if (!target) return;

    event.preventDefault();
    target.classList.toggle("active");
    const menu = document.getElementById("menu");
    if (menu) menu.classList.toggle("active");
    header.classList.toggle("active");
  });

  slider.addEventListener("input", () => {
    rangeValue.textContent = slider.value + "%";
  });
});
