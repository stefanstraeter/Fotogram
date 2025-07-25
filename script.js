let imageGallery = [
    "Alpine_Moments.jpg", 
    "Porsche_Detail.jpg",
    "Porsche_Drive_Thru.jpg",
    "Portrait.jpg", 
    "Snowy_Sunrise.jpg",
    "Summit_In_The_Alps.jpg",
    "Sunrise_and_Coffe.jpg", 
    "Sunset_Cinque_Terre.jpg",
    "Sunset_Clouds.jpg",
    "Surfer_Costa_Rica.jpg", 
    "Venice_Grand_Canal.jpg",
    "Vietnam_Restaurant.jpg",
];

const contentRef = document.getElementById('gallery');
const modal = document.getElementById("modalOverlay");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");

let index = 0;


document.addEventListener('DOMContentLoaded', render);


function render() {                                       
  for (let i = 0; i < imageGallery.length; i++) {     
    let filename = imageGallery[i];    
    contentRef.innerHTML += createImageElement(filename, i);
  }
}


function createImageElement(filename, index) {
  return `<img onclick="openModal('./img/${filename}', ${index})" class="image" 
                src="./img/${filename}" 
                alt="${filename}" 
                loading="lazy" 
            />`;
}


function openModal(src, clickedIndex) {
  modalImage.src = src;
  modalImage.alt = src;

  index = clickedIndex; 
  modal.style.display = "flex";

  modalCaption.textContent = `${index + 1} / ${imageGallery.length}`;
}


function nextImg(){
  index = (index + 1 + imageGallery.length) % imageGallery.length;
  updateModalImage();
};


function previousImg() {
  index = (index - 1 + imageGallery.length) % imageGallery.length;
  updateModalImage();
};


function updateModalImage() {
  modalImage.src = `./img/${imageGallery[index]}`;
  modalImage.alt = `image ${index + 1}`; 
  modalCaption.textContent = `${index + 1} / ${imageGallery.length}`;
};


function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
  };


document.addEventListener("keydown", function (event) {
  if (modal.style.display === "flex") {
    if (event.key === "ArrowRight") {
      nextImg();
    } else if (event.key === "ArrowLeft") {
      previousImg();
    } else if (event.key === "Escape") {
      closeModal();
    }
  }
});


window.onclick = function(event) {
  if (event.target == modal) {
   document.getElementById("modalOverlay").style.display = "none";
  }
};





