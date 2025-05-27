document.addEventListener('DOMContentLoaded', function() {
    const mainTitle = document.getElementById('main-title');
    const subTitle = document.querySelector('h2');
    const fenetre = document.querySelector('.fenetre');
    const menuItems = document.querySelectorAll('.fenetre li');

    setTimeout(() => {
        mainTitle.classList.add('animated');
    }, 500); 

    setTimeout(() => {
        subTitle.classList.add('animated');
    }, 750); 

    setTimeout(() => {
        fenetre.classList.add('animated');
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('animated');
            }, 100 * (index + 1)); // Stagger the animation of list items
        });
    }, 1000); // Delay for the 'fenetre' and its items

    const images = document.querySelectorAll('.image-container img'); // Select images within the container
  
    images.forEach((img, index) => {
      img.style.opacity = 0;
      img.style.transform = 'translateY(20px)'; // Start a little lower
  
      setTimeout(() => {
        let opacity = 0;
        let translateY = 20;
        const intervalId = setInterval(() => {
          opacity += 0.04;
          translateY -= 1;
          img.style.opacity = opacity;
          img.style.transform = `translateY(${translateY}px)`;
          if (opacity >= 1) {
            clearInterval(intervalId);
            img.style.transform = 'translateY(0)'; // Final position
          }
        }, 30); // Adjust timing for speed and smoothness
      }, index * 200); // Stagger the start of the animation for each image
    });
});
  