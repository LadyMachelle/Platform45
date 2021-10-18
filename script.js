//function to display slide
const SlideContent = () => {
  let contentElement = document.getElementById("slide"); //get the slide content to show slide
  let buttonElement = document.getElementById("display-slide"); //get the button to rotate
  contentElement.classList.toggle("show-slide"); //adds and removes content
  buttonElement.classList.toggle("arrow-button-rotate"); //rotates button

  let screenSize = window.document.body.clientWidth; // gets the width of the screen

  // only scroll when on tablets or mobile and slide is not displayed
  if (screenSize < 1024 && contentElement.classList.contains("show-slide")) {
    contentElement.scrollIntoView();
  }
};

//create event listeners
document.getElementById("display-slide").addEventListener("click", SlideContent);

