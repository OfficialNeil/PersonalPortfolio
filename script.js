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
    });
  
    document.body.style.backgroundColor = `rgb(${newColor.join(',')})`;
  });
  
  

  
  
  
  
  