import data from './data.js';
import { gallerySection } from './modules/templates/gallery.js';

const navigationButton = window.navigationButton,
  navigation = window.navigation;

function toggleNav() {
  navigation.classList.toggle('show');
  navigationButton.classList.toggle('show');
}

function render(images) {
  const gallery = window.gallery;
  const galleryPictures = document.createElement('div');
  const galleryImages = gallerySection(images);

  galleryPictures.classList.add('galleryPictures');
  galleryPictures.classList.add('all');
  galleryImages.map((section) => {
    galleryPictures.appendChild(section);
  });
  gallery.appendChild(galleryPictures);
}

function responsiveImages() {
  const galleryPicturesClient =
    document.getElementsByClassName('galleryPicture');

  for (let i = 0; i < galleryPicturesClient.length; i++) {
    let image =
      galleryPicturesClient[i].getElementsByClassName('galleryImg')[0];
    let imageHeight = image.naturalHeight;
    let imageWidth = image.naturalWidth;
    if (imageHeight > imageWidth * 1.4) {
      galleryPicturesClient[i].classList.add('u-row2');
    } else if (imageWidth > imageHeight * 1.4) {
      galleryPicturesClient[i].classList.add('u-col2');
    }
  }
}

function handleFilterImages(target) {
  const galleryPictures = document.getElementsByClassName('galleryPictures');
  const oldClass = galleryPictures[0].classList[1];
  const newClass = target.dataset.filter;
  galleryPictures[0].classList.replace(oldClass, newClass);

  if (navigationButton.classList.contains('show')) toggleNav();
}

function handleClicks(e) {
  if (e.target.matches('#navigationButton')) {
    toggleNav();
  } else if (e.target.matches('a[href="#gallery"]')) {
    handleFilterImages(e.target);
  }
}

document.addEventListener('DOMContentLoaded', render(data.images));
document.addEventListener('load', responsiveImages());
document.addEventListener('click', handleClicks);
