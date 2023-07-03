
const switchMoon = document.querySelector('.switchMoon');
const switchSun = document.querySelector('.switchSun');

const pageContainer = document.querySelector('.page-container');

function enableDarkMode() {

  pageContainer.classList.add('darkMode');

  switchMoon.style.display = 'none';
  switchSun.style.display = 'inline';
}


function disableDarkMode() {

  pageContainer.classList.remove('darkMode');


  switchMoon.style.display = 'inline';
  switchSun.style.display = 'none';
}


function toggleDarkMode() {
  if (pageContainer.classList.contains('darkMode')) {

    disableDarkMode();

    localStorage.setItem('darkMode', 'disabled');
  } else {

    enableDarkMode();

    localStorage.setItem('darkMode', 'enabled');
  }
}

switchMoon.addEventListener('click', toggleDarkMode);
switchSun.addEventListener('click', toggleDarkMode);

window.addEventListener('load', function () {
  var darkModePreference = localStorage.getItem('darkMode');
  if (darkModePreference === 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


