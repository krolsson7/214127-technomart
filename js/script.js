/* write-us*/
var writeusbtn = document.querySelector(".write-us");

var writeus = document.querySelector(".modal-write-us");
var close = writeus.querySelector(".modal-close");

var form = writeus.querySelector("form");

var username = writeus.querySelector("[name=user-name]");
var email = writeus.querySelector("[name=e-mail");

var storage = localStorage.getItem("user-name");

writeusbtn.addEventListener("click", function(event) {
  event.preventDefault();
  writeus.classList.add("modal-show");

  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }

});

close.addEventListener("click", function(event) {
  event.preventDefault();
  writeus.classList.remove("modal-show");
  writeus.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value) {
    event.preventDefault();
    writeus.classList.remove("modal-error");
    writeus.offsetWidth = writeus.offsetWidth;
    writeus.classList.add("modal-error");
  } else {
    localStorage.setItem("user-name", username.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (writeus.classList.contains("modal-show")) {
      writeus.classList.remove("modal-show");
      writeus.classList.remove("modal-error");
    }
  }
});

/* map */
var mapOpen = document.querySelector(".map-open");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-show-map");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show-map")) {
      mapPopup.classList.remove("modal-show-map");
    }
  }
});

