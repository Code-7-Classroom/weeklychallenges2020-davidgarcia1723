filterSelection("all")

// Slideshow
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "/images/slideshow/playing.jpg";
images[1] = "/images/slideshow/accesories.jpg";
images[2] = "/images/slideshow/lite.jpg";
images[3] = "/images/slideshow/mario.jpg";
images[4] = "/images/slideshow/pro.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;

// Contact forms
function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    if (x == "" && y == "") {
        alert("Please fill out Name and Email.");
        return false;
    } else if (x == "") {
        alert("Please fill out your Name.");
        return false;
    } else if (y == "") {
        alert("Please fill out your Email.");
        return false;
    } else {
        return true
    }  
}   
 window.onload.alert = noalert.validateForm(true);
  validateForm();

// Product Filter
  
function filterSelection(category) {
  var productCards = document.getElementsByClassName("sale-item");
  if (category === "all") {
    category = "";
  } 
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  
  for (var i = 0; i < productCards.length; i++) {
    RemoveClass(productCards[i], "show");
    if (productCards[i].className.indexOf(category) > -1) { 
      AddClass(productCards[i], "show");

    };
  }
}

// Show filtered elements
function AddClass(element, name) {
  element.classList.add(name);
}

// Hide elements that are not selected
function RemoveClass(element, name) {
  element.classList.remove(name);
}


// function filterItems() {
//   var type = document.getElementById("filterSelect").value;
//   for (var i = 0; i < items.length; i++){
//       var itemType= items[i].getElementsByClassName("item__type");
//       var itemTypeValue= itemType[0].innerText;
//       if(itemTypeValue == type){
//           items[i].style.display = '';
//       }
//       else if(type == 'default'){
//           items[i].style.display = '';
//       }
//       else{
//           items[i].style.display = 'none';
//       }
//   }
// }