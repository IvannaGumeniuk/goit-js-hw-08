// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const imagesList = createImagesCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imagesList);
galleryContainer.addEventListener('click', onPictureComntainerClick);


function createImagesCards(picture) {
    return picture.map(({ preview, original, description }) => {
        
        return `
            <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                title="${description}"
                alt="${description}"
                />
            </a>
        `;
    }).join('');
}

function onPictureComntainerClick(event) {
    event.preventDefault();
}

let lightbox = new SimpleLightbox('.gallery a');
lightbox.on('show.simplelightbox', function () {
    lightbox.defaultOptions.captionDelay = 250;
});
