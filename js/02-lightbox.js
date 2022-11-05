import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryImg = createGallery(galleryItems);
galleryRef.addEventListener('click', onGalleryItem);

galleryRef.insertAdjacentHTML('beforeend', galleryImg);


function onGalleryItem(event) { 
    event.preventDefault();

    const imgSource = event.target.dataset.source;
    if (!imgSource) { 
        return;
    }
    // const lightbox = new SimpleLightbox('.gallery gallery__item', {});
}

function createGallery(items) { 
    return items.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">  
        <a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt=${description} />
        </a>
        </div>
        `;
    }).join('');
};

console.log(galleryItems);
