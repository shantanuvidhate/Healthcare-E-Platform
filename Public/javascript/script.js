// Geolocation API 

function Review() {
    alert("Please Review Before pressing ok. Our Emergency Services Will be in action immediately");
  }

var x = document.getElementById("lat");
var y = document.getElementById("lon");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
    y.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("lat").value =  position.coords.latitude ;
  document.getElementById("lon").value =  position.coords.longitude ;
}

// Paymet alert

function pay(){
    alert("Please Check an UPI ID carefully. Our Medical Payment Department Will call you after successfull Payment. Thankyou!")
}
