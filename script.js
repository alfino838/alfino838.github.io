document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.content-box');
    
    // Mouse movement effect (Parallax ringan)
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 50;
        const y = (window.innerHeight / 2 - e.pageY) / 50;
        
        box.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });

    // Hover effect untuk logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.style.letterSpacing = '5px';
        logo.style.transition = '0.5s';
    });
    
    logo.addEventListener('mouseout', () => {
        logo.style.letterSpacing = '2px';
    });
});