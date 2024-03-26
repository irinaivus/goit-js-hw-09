import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { images } from './gallery-images.js';

const galleryList = document.querySelector('ul.gallery');
const imagesMarkup = images
  .map(
    ({ preview, original, description }) => `
            <li class="gallery-item">
                <a class="large-img" href="${original}" >
                <img
                class="gallery-image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', imagesMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(SimpleLightbox);
