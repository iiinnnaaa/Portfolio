$(window).on("scroll", function() {
	let header = document.getElementById('header');
	if($(window).scrollTop() > 500) {
		header.style.background = "#000000";
		// header.style.background = "transparent";
	} else {
		header.style.background = "transparent";
	}
});


let menuItems = document.querySelectorAll('.menu-links');
for(let i = 0; i < menuItems.length; i++){
	menuItems[i].addEventListener("click", menuFunction);
}


window.onscroll = function() {
	changeNavColor();
	scrollFunction2();
};




function scrollFunction2() {
		let nav = document.querySelectorAll(".dot-nav a");
		let active = document.querySelector(".dot-active");
		for(let i = 0; i < nav.length; i++){
			if ( document.documentElement.scrollTop > 2600 && document.documentElement.scrollTop < 4200) {
			nav[i].style.backgroundColor = "#00000055";
			nav[i].style.borderColor = "#00000055";
			active.classList.add('dot-active-before');
		 // document.styleSheets[0].addRule('.dot-active::before','border: 1px solid #00000055');
			active.style.backgroundColor = "#00000055";
		}
			else{
				nav[i].style.backgroundColor = "#ffffff5c";
				active.classList.remove('dot-active-before');
				nav[i].style.borderColor = "#ffffff5c";
				// document.styleSheets[0].addRule('.dot-active::before','border: 1px solid #ffffff5c');
				active.style.backgroundColor = "#ffffff5c";
			}
	}
}


$('.works-slider').slick({
	dots: false,
	prevArrow: '.work-left-arrow',
	nextArrow: '.work-right-arrow',
	infinite:       true,
	slidesToShow:   4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]

});


$('.fifth-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 2,
	arrows: false,
	variableWidth: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 767,
			settings: {
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 425,
			settings: {
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});


$('.slide-text').slick({
	dots: false,
	prevArrow: '.left-arrow',
	nextArrow: '.right-arrow',
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: false,
			}
		},
		{
			breakpoint: 760,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
			}
		},
	]
});


function menuFunction() {
	let getElements = document.getElementsByClassName("mobile-menu-icon");
	getElements[0].classList.toggle('clicked');

	let elements = document.getElementsByClassName("header-nav");
	let elem = elements[0];
	if (elem.style.visibility === "visible") {
		elem.style.visibility = "hidden";
	} else {
		elem.style.visibility = "visible";
	}
}

function scrollFunction(id, event) {
		addClass(event);
		// let windowHeight = 7 * window.innerHeight;
		// let calc = windowHeight * ((id - 1) / 5.1);
		// let fin = calc + 3;
	if (id === 1) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	if (id === 2) {
		window.scrollTo({
			top: 832,
			behavior: "smooth",
		});
	}
	if (id === 3) {
		window.scrollTo({
			top: 1895,
			behavior: "smooth",
		})
	}
	if (id === 4) {
		window.scrollTo({
			top: 2909,
			behavior: "smooth",
		})
	}
	if (id === 5) {
		window.scrollTo({
			top: 4390,
			behavior: "smooth",
		})
	}
	if (id === 6) {
		window.scrollTo({
			top: 5254,
			behavior: "smooth",
		})
	}
	}


function changeNavColor(){
	let nav = document.querySelectorAll(".dot-nav a");
		if ( document.documentElement.scrollTop < 832){
			nav[0].classList.add('dot-active');
		}
		else{
			nav[0].classList.remove('dot-active');
		}
		if (document.documentElement.scrollTop > 832 && document.documentElement.scrollTop < 1895){
		nav[1].classList.add('dot-active');
	 }
	 else{
		nav[1].classList.remove('dot-active');
	 }

	if (document.documentElement.scrollTop > 1895 && document.documentElement.scrollTop < 2909){
		nav[2].classList.add('dot-active');
	}
	else{
		nav[2].classList.remove('dot-active');
	}
	if (document.documentElement.scrollTop > 2909 && document.documentElement.scrollTop < 4390){
		nav[3].classList.add('dot-active');
	}
	else{
		nav[3].classList.remove('dot-active');
	}

	if (document.documentElement.scrollTop > 4390 && document.documentElement.scrollTop < 5254){
		nav[4].classList.add('dot-active');
	}
	else{
		nav[4].classList.remove('dot-active');
	}
	if (document.documentElement.scrollTop > 5254){
		nav[5].classList.add('dot-active');
	}
	else{
		nav[5].classList.remove('dot-active');
	}
}




function addClass(event){
		let activeLink = document.getElementsByClassName('dot-active');

		if(event.target.isSameNode(activeLink[0])){
			return;
		}

		let dotLinks = document.getElementsByClassName('dot-link');

		for (let i = 0; i < dotLinks.length; i++) {
			if(!event.target.isSameNode(dotLinks[i]) && dotLinks[i].classList.contains('dot-active')) {
				dotLinks[i].classList.remove('dot-active');
			}

			else {
				if (event.target.isSameNode(dotLinks[i])) {
					event.target.classList.add('dot-active');
				}
			}
		}
	}


