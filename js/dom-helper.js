//// AFTER HTML IS LOADED ////
document.addEventListener('DOMContentLoaded', () => {
  updateYear();
});

//// TEXT UPDATES ////
// Get the current year
const thisYear = new Date().getFullYear();
// Update the year in the footer
function updateYear() {
  document.getElementById('year').textContent = thisYear;
}

//// LINK CLICKS ////
// Click on Website Logo
document.getElementById('logo').addEventListener('click', () => {
  window.location.href = '/';
});
