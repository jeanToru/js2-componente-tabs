const enlaces = document.querySelectorAll(' .tabs-tablist-item');

const contenido = document.querySelectorAll(' .tabs-content-item');

for (let i = 0; i < contenido.length; i++) {
    contenido[i].classList.add('js-content');
}
contenido[0].classList.remove('js-content');
enlaces[0].classList.add('js-active');

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click', (event) => {
        event.preventDefault();
        const id = event.currentTarget.getAttribute('href').substring(1);
        console.log(id);


        for (let i = 0; i < contenido.length; i++) {
            contenido[i].classList.add('js-content');
            if (contenido[i].getAttribute('id') == id) {
                contenido[i].classList.remove('js-content');
            }
        }
        for (let i = 0; i < enlaces.length; i++) {
            enlaces[i].classList.remove('js-active');
        }
        event.currentTarget.classList.add('js-active');
    });
}