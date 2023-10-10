import { galleryItems } from "./gallery-items.js";
// Change code below this line

const options = {
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  uniqueImages: true,
};

const container = document.querySelector(".gallery");

function imageGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }, index) =>
        `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

const gallery = imageGallery(galleryItems);

container.insertAdjacentHTML("beforeend", gallery);

function galleryСlick(evt) {
  evt.preventDefault();
}

const galleryImgA = document.querySelector(".gallery a");
galleryImgA.addEventListener(`click`, elementCaptionOptions);
function elementCaptionOptions() {
  let captionOptionsElement = {};
  return captionOptionsElement;
}

container.addEventListener(`click`, galleryСlick);

let lightbox = new SimpleLightbox(".gallery a", options);

lightbox.on("show.simplelightbox", function () {
  open;
});
