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
