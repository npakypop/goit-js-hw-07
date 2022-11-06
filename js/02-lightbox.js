import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryImg);
galleryRef.addEventListener('click', onGalleryItem);

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    enableKeyboard: true,
});


function createGallery(items) { 
    return items.map(({ preview, original, description }) => {
        return ` 
        <a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} title=${description} />
        </a>
        `;
    }).join('');
};

function onGalleryItem(event) { 
    event.preventDefault();
}

console.log(galleryItems);
