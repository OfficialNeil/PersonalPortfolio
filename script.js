document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    document.addEventListener('scroll', function() {
        let scrollPosition = window.scrollY;

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
    });
});


const phrases = ['I\'m a Student', 'I\'m an Engineer', 'I\'m a Problem-Solver'];
let index = 0;
let letterIndex = 0;
let direction = 1;

function updateText() {
  const textElement = document.getElementById('text');
  const cursorElement = document.getElementById('cursor');
  
  textElement.textContent = phrases[index].substring(0, letterIndex + 1);
  
  if (letterIndex === phrases[index].length - 1) {
    direction = -1;
  } else if (letterIndex === 0 && direction === -1) {
    direction = 1;
    index = (index + 1) % phrases.length;
  }
  
  letterIndex += direction;
  
  cursorElement.style.visibility = (direction === 1 && letterIndex < phrases[index].length) ? 'visible' : 'hidden';
}

function startAnimation() {
  setInterval(updateText, 250);
}

startAnimation();

document.addEventListener('DOMContentLoaded', function() {
    let animatedContent = document.querySelector('.animated-content');
    let animatedImage = document.querySelector('.animated-image');
    let animatedText = document.querySelector('.animated-text');
    
    animatedContent.classList.add('animate');
    animatedImage.classList.add('animate');
    animatedText.classList.add('animate');
  });

  
  
  
  
  