import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
function createGallery(elements) {
    return elements.map((elem) =>
        `<div class="gallery__item"> 
         <a class="gallery__link" href="${elem.original}">
           <img class="gallery__image" src="${elem.preview}"
             data-sourse="${elem.original}"
             alt="${elem.description}"/>
         </a>
       </div>`)
        .join("")
}
const pushGallery = createGallery(galleryItems)
gallery.innerHTML = pushGallery


let galleryBox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 250,
});
galleryBox.on("show.simplelightbox", function () {});

console.log(galleryItems);
