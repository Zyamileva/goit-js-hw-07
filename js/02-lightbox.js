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

const lightbox = new SimpleLightbox(".gallery a", options);

lightbox.on("show.simplelightbox", function () {
  open;
});
