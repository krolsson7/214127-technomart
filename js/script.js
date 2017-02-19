
var modalCart = document.querySelector('.modal-cart');
var buttonBuy = document.querySelectorAll('.buy');
var modalWriteUs = document.querySelector('.modal-write-us');
var modalClose = document.querySelectorAll('.modal-close');
var buttonWriteUs = document.querySelector('.contacts-map .btn');
var btnContinue = document.querySelector('.continue');
var mapBlock = document.querySelector('.modal-map');
var mapLink = document.querySelector('.map-mini');

if (modalWriteUs) {
	var form = modalWriteUs.querySelector('form');
	var userName = modalWriteUs.querySelector('[name=user-name]');
	var eMail = modalWriteUs.querySelector('[name=e-mail]');
	var textArea = modalWriteUs.querySelector('[name=text]');

	buttonWriteUs.addEventListener('click', function(event){
		event.preventDefault();
		closeWindows();
		modalWriteUs.classList.add('modal-show');
		userName.focus();
	});
	
	form.addEventListener('submit', function(event) {
		if (!userName.value || !eMail.value || !textArea.value) {
			modalWriteUs.classList.remove('modal-error');
			modalWriteUs.offsetWidth = modalWriteUs.offsetWidth;
			event.preventDefault();
			modalWriteUs.classList.add('modal-error');
		}
	});
}

window.addEventListener ('keydown', function(event) {
	if (event.keyCode == 27) {
		closeWindows();
	}
});

for (var i = 0; i < modalClose.length; i++) {
	modalClose[i].addEventListener('click', function(event){
		event.preventDefault();
		closeWindows ();
	});
}

for (var i = 0; i < buttonBuy.length; i++) {
	buttonBuy[i].addEventListener('click', function(event){
		event.preventDefault();
		closeWindows();
		modalCart.classList.add('modal-show');
	});
}

btnContinue.addEventListener('click', function(event){
	event.preventDefault();
	closeWindows();
});

if (mapLink) {
	mapLink.addEventListener ('click', function(event) {
		event.preventDefault();
		closeWindows ();
		mapBlock.classList.add('show-window');
	});
}

function closeWindows () {
	if (modalCart.classList.contains('modal-show')) {
		modalCart.classList.remove('modal-show');
	}
	if (modalWriteUs && modalWriteUs.classList.contains('modal-show')) {
		modalWriteUs.classList.remove('modal-show');
	}
	if (modalWriteUs && modalWriteUs.classList.contains('modal-error')) {
		modalWriteUs.classList.remove('modal-error');
	}
	if (mapBlock && mapBlock.classList.contains('show-window')) {
		mapBlock.classList.remove('show-window');
	}
}