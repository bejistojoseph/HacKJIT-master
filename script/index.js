

var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      },
      1560: {
        slidesPerView: 3
      }
    }
  });


  window.addEventListener('scroll', () => {
    const homeSectionHeight = document.getElementById('home').offsetHeight; // Height of the home section
    const otherSections = document.querySelectorAll('.section'); // Other sections
    const navbar = document.querySelector('.navbar'); // Navigation bar
  
    // Check if the user has scrolled beyond the home section
    if (window.pageYOffset > homeSectionHeight) {
      navbar.classList.add('hide-navbar'); // Hide the navbar
  
      // Hide other sections (assuming you have a class 'hide-section' to hide sections)
      otherSections.forEach(section => {
        section.classList.add('hide-section');
      });
    } else {
      navbar.classList.remove('hide-navbar'); // Show the navbar
  
      // Show other sections
      otherSections.forEach(section => {
        section.classList.remove('hide-section');
      });
    }
  });

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const navbar = document.getElementById("navbar");

  mobileMenuButton.addEventListener("click", () => {
    navbar.classList.toggle("mobile-open");
  });
        
  const btnOpenModalAiMl = document.querySelector('.btn-open-modal-ai-ml');
  const btnOpenModalGameDev = document.querySelector('.btn-open-modal-game-dev');
  const btnOpenModalIoT = document.querySelector('.btn-open-modal-iot');
  const btnCloseModal = document.querySelectorAll('.btn-close-modal');
  const modalOverlayAiMl = document.querySelector('.modal-overlay-ai-ml');
  const modalOverlayGameDev = document.querySelector('.modal-overlay-game-dev');
  const modalOverlayIoT = document.querySelector('.modal-overlay-iot');

  btnOpenModalAiMl.addEventListener('click', () => {
    modalOverlayAiMl.style.display = 'flex';
  });

  btnOpenModalGameDev.addEventListener('click', () => {
    modalOverlayGameDev.style.display = 'flex';
  });

  btnOpenModalIoT.addEventListener('click', () => {
    modalOverlayIoT.style.display = 'flex';
  });

  btnCloseModal.forEach(btn => {
    btn.addEventListener('click', () => {
      modalOverlayAiMl.style.display = 'none';
      modalOverlayGameDev.style.display = 'none';
      modalOverlayIoT.style.display = 'none';
    });
  });