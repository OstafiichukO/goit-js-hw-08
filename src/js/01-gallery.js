import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const createGalleryElements = function () {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `
          <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        `,
    )
    .join('');
};
galleryEl.insertAdjacentHTML('afterbegin', createGalleryElements(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
