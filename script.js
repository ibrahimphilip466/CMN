/*const hamburger = document.querySelector('.hamburger');
      const navLinks = document.querySelector('.nav');

      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      
    });*/

    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.nav');
    const touchout = document.querySelector('body');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');

    });

      /*
    hamburger.onclick = () => {
     sidebar.style.display = 'flex';
    } */
