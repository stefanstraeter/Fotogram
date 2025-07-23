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


document.addEventListener('DOMContentLoaded', render);
        // render() is only called when the DOM is fully loaded


function render() {                                       
  let contentRef = document.getElementById('gallery');
  for (let index = 0; index < imageGallery.length; index++) {     
  let filename = imageGallery[index];    
  contentRef.innerHTML += createImageElement(filename);
  }
}
        // render() function gets the DOM element with the ID gallery via getElementById()
        // variable contentRef is your destination for the new <img> elements
        // The for loop goes through each element in the imageGallery array
        // Retrieves a value from the imageGallery array and stores it in a variable called filename 
        // The variable filename now contains the string value from the array at position 1 -> let filename = imageGallery[1];                           
        // Inserts a new <img> element into the HTML code


function createImageElement(filename) {
return `<img onclick="openModal('./img/${filename}')" class="image" 
              src="./img/${filename}" 
              alt="${filename}" 
              loading="lazy" 
          />`;
}
        // This createImageElement() function is a template function that returns an HTML string for an <img> element.
        // It accepts one parameter: filename


function openModal(src) {
  let modal = document.getElementById("modalOverlay");
  let modalImage = document.getElementById("modalImage");

  modalImage.src = src;
  modalImage.alt = src;

  modal.style.display = "flex";
}
        // function openModal() expects a parameter: src
        // it will be executed onclick
        // variable modal gets <div> by its ID 
        // variable modalImage gets <img> tag by its ID 
        // Sets the src attribute of the <img> tag in the modal to the transferred image path
        // Result: The image you clicked on is displayed in the modal
        // Sets the alt tag to src name
        // Displays the modal by setting it from display: none to display: flex


function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
  }


let modalOverlay = document.getElementById("modalOverlay");

window.onclick = function(event) {
  if (event.target == modalOverlay) {
   document.getElementById("modalOverlay").style.display = "none";
  }
}
      // variable modalOverlay gets <div> by its ID  
      // function will be executed when you cick somewhere on the screen
      // The if condition asks: "Was the modal overlay clicked on directly?"
      // You want to prevent a click on the image itself
      // Displays the modal by setting it to display: none


let index = 0;

function nextImg(){
  index = (index + 1 + imageGallery.length) % imageGallery.length;
  updateModalImage();
}
      // function displays next image in modal
      // When you are at the last image, it jumps back to the first one (→ infinite loop)
      // Increase index by 1: index + 1 
      // % imageGallery.length ensures that the index does not become larger than the array
      // Calls updateModalImage and updates the displayed image in the modal to the new index position


function previousImg() {
  index = (index - 1 + imageGallery.length) % imageGallery.length;
  updateModalImage();
}


function updateModalImage() {
  let modalImage = document.getElementById("modalImage");
  modalImage.src = `./img/${imageGallery[index]}`;
  modalImage.alt = `image ${index + 1}`;
}
      // function retrieves the <img> element in the modal (id=“modalImage”)
      // Updates the src path with the current image from the imageGallery array
      // sets alt attribute



document.addEventListener("DOMContentLoaded", function () {
  let prevScrollpos = window.pageYOffset || document.documentElement.scrollTop;

  window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    const navbar = document.getElementById("navbar");

    if (prevScrollpos > currentScrollPos) {
      // Hochscrollen → Navbar zeigen
      navbar.style.top = "0";
    } else {
      // Runterscrollen → Navbar ausblenden
      navbar.style.top = "-65px";
    }

    prevScrollpos = currentScrollPos;
  });
});
      // let prevScrollpos = window.pageYOffset ->  Saves the current scroll position (vertical) when loading the page 
      // window.onscroll = function() { ... } -> This is an event handler: This function is executed every time you scroll on the page
      // let currentScrollPos = window.pageYOffset; -> The new scroll position is saved here as soon as a scroll event occurs
      // if (prevScrollpos > currentScrollPos) -> If the previous scroll position is larger than the current one, this means that you have scrolled upwards
      // document.getElementById("navbar").style.top = "0"; -> In this case, the navigation bar is moved to the top (i.e. displayed)
      // else { document.getElementById("navbar").style.top = "-65px"; } -> If you scroll down, the navigation bar is moved upwards out of the visible area (hidden). The top is set to -65px - so the bar disappears towards the top
      // prevScrollpos = currentScrollPos; -> The current scroll position is saved so that it can be used as a reference value the next time you scroll
      
