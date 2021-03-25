$(window).on("scroll", function() {
	let header = document.getElementById('header');
	if($(window).scrollTop() > 500) {
		header.style.background = "#000000";
		// header.style.background = "transparent";
	} else {
		header.style.background = "transparent";
	}
});



const config = {
	type: "slider",
	perView: 4,
	breakpoints: {
		800:{
			perView: 1
		}
	},
	bound: true,
	startAt: 0,
	gap: 40,
}

new Glide('.glide', config).mount();


$('.fifth-slider').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 5,
	arrows: false,
	variableWidth: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});

//
$('.slide-text').slick({
	dots: false,
	prevArrow: '.left-arrow',
	nextArrow: '.right-arrow',
	infinite: false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
});



function menuFunction() {
	let getel = document.getElementsByClassName("mobile-menu-icon");
	getel[0].classList.toggle('clicked');

	let elems = document.getElementsByClassName("header-nav");
	let elem = elems[0];
	if (elem.style.visibility === "visible") {
		elem.style.visibility = "hidden";
	} else {
		elem.style.visibility = "visible";
	}
}

function scrollFunction(id, event) {
		addClass(id, event);
		let windowHeight = 7 * window.innerHeight;
		let calc = windowHeight * ((id - 1) / 5);
		let fin = calc + 3;
		if (id === 1) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		} else {
			window.scrollTo({
				top: fin,
				behavior: "smooth",
			})
		}
	}

	function addClass(id, event){
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


