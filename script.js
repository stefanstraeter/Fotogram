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
]

let index = 0;

let modalOverlay = document.getElementById("modalOverlay");

document.addEventListener('DOMContentLoaded', render);

function render() {                                       
  let contentRef = document.getElementById('gallery');
  for (let index = 0; index < imageGallery.length; index++) {     
  let filename = imageGallery[index];    
  contentRef.innerHTML += createImageElement(filename);
  }
}

function createImageElement(filename) {
return `<img onclick="openModal('./img/${filename}')" class="image" 
              src="./img/${filename}" 
              alt="${filename}" 
              loading="lazy" 
          />`;
}


function openModal(src) {
  let modal = document.getElementById("modalOverlay");
  let modalImage = document.getElementById("modalImage");

  modalImage.src = src;
  modalImage.alt = src;

  modal.style.display = "flex";
}


function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
  }


window.onclick = function(event) {
  if (event.target == modalOverlay) {
   document.getElementById("modalOverlay").style.display = "none";
  }
}


function nextImg(){
  index = (index + 1 + imageGallery.length) % imageGallery.length;
  updateModalImage();
}


function previousImg() {
  index = (index - 1 + imageGallery.length) % imageGallery.length;
  updateModalImage();
}


function updateModalImage() {
  let modalImage = document.getElementById("modalImage");
  modalImage.src = `./img/${imageGallery[index]}`;
  modalImage.alt = `image ${index + 1}`;
}
