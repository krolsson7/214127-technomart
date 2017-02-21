
var modalCart = document.querySelector(".modal-cart");
var buttonBuy = document.querySelectorAll(".buy");

var modalClose = document.querySelectorAll(".modal-close");

var btnContinue = document.querySelector(".continue");





window.addEventListener ("keydown", function(event) {
	if (event.keyCode == 27) {
		closeWindows();
	}
});

for (var i = 0; i < modalClose.length; i++) {
	modalClose[i].addEventListener("click", function(event){
		event.preventDefault();
		closeWindows ();
	});
}

for (var i = 0; i < buttonBuy.length; i++) {
	buttonBuy[i].addEventListener("click", function(event){
		event.preventDefault();
		closeWindows();
		modalCart.classList.add("modal-show");
	});
}

btnContinue.addEventListener("click", function(event){
	event.preventDefault();
	closeWindows();
});
function closeWindows () {
	if (modalCart.classList.contains("modal-show")) {
		modalCart.classList.remove("modal-show");
	} 
}