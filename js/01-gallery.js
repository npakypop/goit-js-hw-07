import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);

galleryRef.addEventListener('click', onGalleryItem);
window.addEventListener('keydown', closeModal);

galleryRef.insertAdjacentHTML('beforeend', galleryImg);

function onGalleryItem(event) { 
    event.preventDefault();

    const imgSource = event.target.dataset.source;
    if (!imgSource) { 
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src=${imgSource} width='1280' height='720'></img>
    </div>
    `)
    instance.show();

    const bigImg = document.querySelector('.basicLightbox');
    bigImg.addEventListener('click', closeModal);
}

function closeModal(event){
    if (event.code === 'Escape' && document.querySelector('.basicLightbox') || event.target.closest('.basicLightbox')) {
        document.querySelector('.basicLightbox').remove();
    }
}

function createGallery(items) { 
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">  
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
        />
        </a>
        </div>
        `;
    }).join('');
};



