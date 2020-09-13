import gallery from './gallery-items.js';


const refs = {
    gallery: document.querySelector('.js-gallery'),
    modal: document.querySelector('.lightbox'),
    closeBtn: document.querySelector('button[data-action="close-lightbox"]'),
    modalImg: document.querySelector('img.lightbox__image')
}

    refs.gallery.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.nodeName === "IMG") {
            refs.modal.classList.add('is-open');
            console.dir(event.target);
            refs.modalImg.src = event.target.dataset.source;
            refs.modalImg.alt = event.target.alt;
        }
        return;
        
    });
        refs.closeBtn.addEventListener('click', () => {
        refs.modal.classList.remove('is-open');
        refs.modalImg.src = '';
        refs.modalImg.alt = '';
    });



gallery.forEach(element => {
const img = document.createElement('img');
img.classList.add('gallery__image');
img.src = element.preview;
img.setAttribute('data-source', element.original);
img.alt = element.description;

const link = document.createElement('a');
link.classList.add('gallery__link');
link.href = element.original;
link.append(img);

const li = document.createElement('li');
li.classList.add('gallery__item');
li.append(link);

refs.gallery.append(li);
})

