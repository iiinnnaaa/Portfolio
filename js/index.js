
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

function scrollFunction(id) {
	let winheight = 7 * window.innerHeight;
	let calc = winheight * ((id-1)/7);
	let fin = calc - 60;
	if(id === 1){
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}
	else{
		window.scrollTo({
			top: fin,
			behavior: "smooth",
		})
	}
	 console.log(winheight);
	console.log(fin);
}