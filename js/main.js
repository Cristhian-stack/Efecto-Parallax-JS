const Traslacion = document.querySelectorAll('.imagen');

window.addEventListener('scroll', () => {
    let Scroll = window.pageYOffset;
    Traslacion.forEach(element => {
        let Speed = element.dataset.speed;

        element.style.transform = `translateY(${Scroll * Speed}px)`;
    });

});