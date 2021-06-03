const templateImages = ({ src, alt, tags, description }) => {
  let figure = document.createElement('figure'),
    divTexts = document.createElement('div'),
    image = document.createElement('img'),
    span = document.createElement('span'),
    figcaption = document.createElement('figcaption');

  image.src = src;
  image.alt = alt;
  image.classList.add('galleryImg');
  span.innerHTML = description;
  figcaption.innerHTML = alt;

  divTexts.classList.add('galleryPictureTexts');
  divTexts.appendChild(figcaption);
  divTexts.appendChild(span);

  figure.classList.add('galleryPicture');
  tags.map((tag) => figure.classList.add(tag));

  figure.appendChild(image);
  figure.appendChild(divTexts);

  // tags.map((tag) => tagsElement.appendChild());

  return figure;
};

export const gallerySection = (images) =>
  images.map((image) => templateImages(image));
