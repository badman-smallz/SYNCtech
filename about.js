
  // Smooth scrolling for navigation links
  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a.nav-link');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

  const speakerCarousel = document.getElementById('speakerCarousel');
let carouselPaused = false;

speakerCarousel.addEventListener('mouseenter', () => {
    if (!carouselPaused) {
        // Pause the carousel
        speakerCarousel.pause();
        carouselPaused = true;
    }
});

speakerCarousel.addEventListener('mouseleave', () => {
    if (carouselPaused) {
        // Resume the carousel
        speakerCarousel.cycle();
        carouselPaused = false;
    }
});

  const accordionButtons = document.querySelectorAll('[data-toggle="collapse"]');

    // Attach event listeners to each accordion button
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle the 'collapsed' class to indicate expanded/collapsed state
            button.classList.toggle('collapsed');
            
            // Get the target element for this button
            const targetSelector = button.getAttribute('data-target');
            const targetElement = document.querySelector(targetSelector);

            // Toggle the collapse state of the target element
            if (targetElement) {
                targetElement.classList.toggle('show');
            }
        });
    });
    
    // Initialize the carousel
    $(document).ready(function () {
        $('#speakerCarousel').carousel();
    });

