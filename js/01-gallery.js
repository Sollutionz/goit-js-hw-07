import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
function createGallery(elements) {
    return elements.map((elem) => `<div class="gallery__item"> 
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
gallery.addEventListener('click', imageClick)

function imageClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }
   const instance = basicLightbox.create(`
    <img src=${event.target.dataset.sourse} width="800" height="600">
`)

    instance.show()
    gallery.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
            instance.close()
        }
        
    } )
    
}
console.log(galleryItems);
