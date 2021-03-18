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
		let winheight = 7 * window.innerHeight;
		let calc = winheight * ((id - 1) / 7);
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