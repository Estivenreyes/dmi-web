const gallery = document.getElementById("gallery");
const images = document.querySelectorAll(".gallery__item img");

// images.forEach(image => {
//     image.addEventListener("click", (e) => {
//         const imageSrc = e.target.currentSrc;
//         openLightbox(imageSrc);
//     });
// });

const openLightbox = (imageSource) => {
    const element = document.createElement('div');
    element.className = "lightbox";
    element.innerHTML = `<img src="${imageSource}">
    <div id="next">></div>
    <div id="previous"><</div>
    `;

    document.body.appendChild(element);
};

gallery.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        const imageSrc = e.target.currentSrc;
        openLightbox(imageSrc);
    }

    if(e.target.tagName === "P") {
        const nextImage = e.target.nextElementSibling;
        const imageSrc = nextImage.currentSrc;

        openLightbox(imageSrc);
    }

});