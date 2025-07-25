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

let index = 0;
let modalOverlay = document.getElementById("modalOverlay");


document.addEventListener('DOMContentLoaded', render);


function render() {                                       
  let contentRef = document.getElementById('gallery');
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
  let modal = document.getElementById("modalOverlay");
  let modalImage = document.getElementById("modalImage");

  modalImage.src = src;
  modalImage.alt = src;

  index = clickedIndex; 
  modal.style.display = "flex";
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
  let modalImage = document.getElementById("modalImage");
  modalImage.src = `./img/${imageGallery[index]}`;
  modalImage.alt = `image ${index + 1}`;
};


function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
  };


document.addEventListener("keydown", function (event) {
  if (modalOverlay.style.display === "flex") {
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
  if (event.target == modalOverlay) {
   document.getElementById("modalOverlay").style.display = "none";
  }
};




