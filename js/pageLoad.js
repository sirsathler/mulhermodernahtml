var animatorsNodes = document.querySelectorAll(".anim")
var animatorsArray = Array.from(animatorsNodes)

var page = document.querySelector(".logo");

window.addEventListener("load", () => {

	animatorsArray.map((anim) =>{
		anim.classList.toggle("anim")
	})
})