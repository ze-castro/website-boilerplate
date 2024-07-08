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
  window.location.href = 'index.html';
});

//// NAV BAR MOBILE ////
// Open and close the mobile nav
const menuBtn = document.getElementById('menu').querySelector('button');
const navItems = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  // Check if the menu is open
  if (navItems.classList.contains('menu-mobile')) {
    // Run animation
    navItems.style.animation = 'slideToLeft var(--slow-transition) forwards';
    // Close the menu
    setTimeout(() => {
      navItems.style.animation = '';
      navItems.classList.remove('menu-mobile');
    }, 500);
    return;
  }

  navItems.classList.toggle('menu-mobile');
});
