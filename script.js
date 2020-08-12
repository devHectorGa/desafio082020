import data from './data.js';
import { gallerySection } from './modules/templates/gallery.js';

let navigationButton = window.navigationButton,
  navigation = window.navigation;

navigationButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
  navigationButton.classList.toggle('show');
});

function render(images) {
  const gallery = window.gallery;
  const galleryPictures = document.createElement('div');
  const galleryImages = gallerySection(images);

  galleryPictures.classList.add('galleryPictures');
  galleryImages.map((section) => {
    galleryPictures.appendChild(section);
  });

  gallery.appendChild(galleryPictures);
}

document.addEventListener('DOMContentLoaded', render(data.images));
