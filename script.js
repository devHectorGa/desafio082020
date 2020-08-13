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

  const galleryPicturesClient = document.getElementsByClassName(
    'galleryPicture'
  );

  for (let i = 0; i < galleryPicturesClient.length; i++) {
    let image = galleryPicturesClient[i].getElementsByClassName(
      'galleryImg'
    )[0];
    let imageHeight = image.naturalHeight;
    let imageWidth = image.naturalWidth;
    if (imageHeight > imageWidth + imageWidth * 0.2) {
      galleryPicturesClient[i].classList.add('u-row2');
    } else if (imageWidth > imageHeight + imageHeight * 0.3) {
      galleryPicturesClient[i].classList.add('u-col2');
    }
  }
}

document.addEventListener('DOMContentLoaded', render(data.images));
