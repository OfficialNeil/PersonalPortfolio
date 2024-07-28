document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  function makeLinkActive() {
      let scrollPosition = window.scrollY + 100;

      sections.forEach(sec => {
          const secTop = sec.offsetTop;
          const secHeight = sec.offsetHeight;

          if (scrollPosition >= secTop && scrollPosition < secTop + secHeight) {
              navLinks.forEach(link => {
                  link.classList.remove('active');
              });
              const correspondingLink = document.querySelector('header nav a[href="#' + sec.id + '"]');
              if (correspondingLink) {
                  correspondingLink.classList.add('active');
              }
          }
      });
  }

  makeLinkActive();

  document.addEventListener('scroll', makeLinkActive);
});



document.addEventListener('DOMContentLoaded', function() {
  let animatedContent = document.querySelector('.animated-content');
  let animatedText = document.querySelector('.animated-text');
  
  animatedContent.classList.add('animate');
  animatedText.classList.add('animate');
});

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.clientHeight;
  const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

  const startColor = [227, 227, 227];
  const endColor = [193, 206, 222];
  const newColor = startColor.map((start, i) => {
    const end = endColor[i];
    return Math.round(start + (end - start) * (scrollPercentage / 100));
  })

  document.body.style.backgroundColor = `rgb(${newColor.join(',')})`;
});

document.addEventListener("DOMContentLoaded", function () {
const openPopupLinks = document.querySelectorAll('.openPopup');
const closePopupButtons = document.querySelectorAll('.popup .close');

openPopupLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const popup = this.closest('.portfolioItem').querySelector('.popup');
    popup.style.display = 'block';
  });
});

closePopupButtons.forEach(button => {
  button.addEventListener('click', function () {
    const popup = this.closest('.popup');
    popup.style.display = 'none';
  });
});
});

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const header = document.getElementById('header');
  const navbar = document.getElementById('navbar');

  navToggle.addEventListener('click', function() {
    header.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  // Function to check if the user is on a mobile device
  function isMobileDevice() {
    return window.innerWidth <= 768;
  }

  // Only show the toggle button if the user is on a mobile device
  if (isMobileDevice()) {
    navToggle.style.display = 'block';
  } else {
    navToggle.style.display = 'none';
  }

  // Handle window resize
  window.addEventListener('resize', function() {
    if (isMobileDevice()) {
      navToggle.style.display = 'block';
    } else {
      navToggle.style.display = 'none';
      header.classList.remove('active');
      navbar.classList.remove('active');
    }
  });
});