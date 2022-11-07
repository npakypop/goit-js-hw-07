import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);

galleryRef.addEventListener('click', onGalleryItem);
galleryRef.insertAdjacentHTML('beforeend', galleryImg);


let instance;
function onGalleryItem(event) { 
    event.preventDefault();

    if (event.target.nodeName !== "IMG") { 
        return;
    }
    
    const imgSource = event.target.dataset.source;
    instance = basicLightbox.create(`<div class="modal"><img src="${imgSource}" width='1024' height='720'></div>`)
    instance.show();

    document.addEventListener("keydown", closeModal);
}

function closeModal(event) {
    const key = event.key;
    if (key === "Escape" ) {
        document.removeEventListener("keydown", closeModal);
        instance.close();
    }
}

function createGallery(items) { 
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">  
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
    }).join('');
};

