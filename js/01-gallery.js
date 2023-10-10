import { galleryItems } from "./gallery-items.js";
// Change code below this line

let instance = "";

const container = document.querySelector(".gallery");

function imageGallery(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }, index) =>
        `<li data-img-id="${index}" class="gallery__item">
           <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
          </a>
        </li>`
    )
    .join("");
}

const gallery = imageGallery(galleryItems);

container.insertAdjacentHTML("beforeend", gallery);

container.addEventListener("click", onClick);

function onClick(evt) {
  const { target } = evt;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  evt.preventDefault();
  if (target.nodeName !== "IMG") {
    return;
  }

  target.src = target.dataset.source;
  instance = basicLightbox.create(
    `
  <img src="${target.src}"  alt="${target.alt}">
  `,
    {
      onShow: (instance) => {
        lightboxListenersAdd();
      },
    }
  );
  instance.show();
}

function lightboxListenersAdd() {
  window.addEventListener("keyup", onKeyPress);
}

function onKeyPress(evt) {
  console.log(instance);
  switch (evt.key) {
    case "Esc":
    case "Escape":
      instance.close();
      break;
  }
}
