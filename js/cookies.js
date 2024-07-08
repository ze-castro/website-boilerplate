// This file contains the code to manage the cookies component.

// get the cookies component
const cookies = document.getElementById('cookies');

//// AFTER HTML IS LOADED ////
document.addEventListener('DOMContentLoaded', () => {
  if (checkCookies()) {
    // Hide cookies
    document.getElementById('cookies').remove();
  } else {
    // Show cookies
    setTimeout(() => {
      cookies.style.display = 'flex';
    }, 1000);
  }

  // DELETE IF: YOU DO NOT WANT TO SHOW THE COOKIES TRANSPARENCY INFO IN THE CONSOLE
  console.log('%cCookies we use:', 'font-weight: bold; font-size: 1rem;');
  console.log('');
  console.log('%cGoogle Analytics', 'font-weight: bold; font-size: 0.8rem;');
  console.log('https://policies.google.com/privacy');
  console.log('We use Google Analytics to track the number of visitors of our website.');
  console.log('');
  console.log('%cLocal Storage', 'font-weight: bold; font-size: 0.8rem;');
  console.log(
    'We use local storage to store if the user has accepted the cookies previously, that way we do not show the cookies bar every time the user visits the website.'
  );
  console.log('');
  console.log('We do not store any user data. Thank you for visiting our website!');
});

// Accept cookies
function acceptCookies() {
  localStorage.setItem('cookies', true);
  cookies.style.animation = 'fadeOut var(--slow-transition) forwards';
  setTimeout(() => {
    cookies.remove();
  }, 500);
}

// Check if the user has accepted the cookies
function checkCookies() {
  const cookies = localStorage.getItem('cookies');
  if (cookies) {
    return true;
  }
  return false;
}

// When the user clicks the close button of the cookies component
const cookiesBtn = cookies.querySelector('button');
cookiesBtn.addEventListener('click', acceptCookies);