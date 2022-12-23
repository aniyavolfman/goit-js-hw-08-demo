import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryEl = document.querySelector('.gallery');
const imagesMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);


function createGallery(images) {
    return images.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    }).join(' ');
}



let gallery = new SimpleLightbox('.gallery a');

    
gallery.on('show.simplelightbox', function () {
    gallery.options.captionsData = 'alt';
    gallery.options.captionDelay = 250;
    gallery.options.scrollZoom = false;
    gallery.options.scrollZoomFactor = 0;
    });