//SLIDER
var box = document.getElementsByClassName('article-block');
var btn_left = document.getElementById('btn_left');
var btn_right = document.getElementById('btn_right');
var number = 0;

for (var i = 0; i < box.length; i++) {
	box[i].style.display = "none";
}
box[number].style.display = "block";

if (btn_right) {
	btn_right.addEventListener('click', function () {
		number = number + 1;

		if (number < box.length) {
			box[number - 1].style.display = "none";
			box[number - 1].style.transition = "1s";
			box[number].style.display = "block";
			box[number].style.transition = "1s";
		} else {
			box[number - 1].style.display = "none";
			number = 0;
			box[number].style.display = "block";
		}
	});
}

if(btn_left){
	btn_left.addEventListener('click', function () {

	if (number > 0) {
		number = number - 1;
		box[number + 1].style.display = "none";
		box[number].style.display = "block";
	} else {
		box[number].style.display = "none";
		number = box.length - 1;
		box[number].style.display = "block";
	}

});
}

//MENU
var menuBtn = document.getElementById('menu-icon');
var mainNav = document.getElementById('main-nav');

menuBtn.addEventListener("click", function(){
	
	mainNav.classList.toggle('main-nav-opened');
	
	if(window.scrollY>0){
		header.classList.toggle('scrolled-header');
	}
});



//HEADER WHILE SCROLLING
var header = document.getElementById('header');

function scrolledNav(){
	
	if (window.scrollY == 0){
		header.classList.remove('scrolled-header');
	} else {
		header.classList.add('scrolled-header');
	}
}

window.addEventListener('scroll', scrolledNav);


