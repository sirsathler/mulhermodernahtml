var bagsButton = document.querySelector("#bags-filter")
var clothesButton = document.querySelector("#clothes-filter")
var beltsButton = document.querySelector("#belts-filter")
var perfumesButton = document.querySelector("#perfumes-filter")
var othersButton = document.querySelector("#others-filter")

var bagsContainer = document.querySelector("#bags-container")
var clothesContainer = document.querySelector("#clothes-container")
var beltsContainer = document.querySelector("#belts-container")
var perfumesContainer = document.querySelector("#perfumes-container")
var othersContainer = document.querySelector("#others-container") 


var priceFilterRange = document.querySelector("#price-filter")
var priceFilterValue = document.querySelector("#price-filter-value")



priceFilterRange.addEventListener("input", () =>{
	if(priceFilterRange.value == 501){
		var newValue = `<p class="price-filter-value">Mais de R$500,00</p>`
	}
	else{
		var newValue = `<p class="price-filter-value">R$${priceFilterRange.value}</p>`
	}
	priceFilterValue.innerHTML = newValue;
	organizeFilter(priceFilterRange.value)
})


bagsButton.addEventListener("click", () =>{
	bagsContainer.style.display = "grid";
	clothesContainer.style.display = "none";
	beltsContainer.style.display = "none";
	perfumesContainer.style.display = "none";
	othersContainer.style.display = "none";

	bagsButton.classList.add("on");
	clothesButton.classList.remove("on");
	beltsButton.classList.remove("on");
	perfumesButton.classList.remove("on");
	othersButton.classList.remove("on");

})

clothesButton.addEventListener("click", () =>{
	bagsContainer.style.display = "none";
	clothesContainer.style.display = "grid";
	beltsContainer.style.display = "none";
	perfumesContainer.style.display = "none";
	othersContainer.style.display = "none";

	bagsButton.classList.remove("on");
	clothesButton.classList.add("on");
	beltsButton.classList.remove("on");
	perfumesButton.classList.remove("on");
	othersButton.classList.remove("on");
})

beltsButton.addEventListener("click", () =>{
	bagsContainer.style.display = "none";
	clothesContainer.style.display = "none";
	beltsContainer.style.display = "grid";
	perfumesContainer.style.display = "none";
	othersContainer.style.display = "none";

	bagsButton.classList.remove("on");
	clothesButton.classList.remove("on");
	beltsButton.classList.add("on");
	perfumesButton.classList.remove("on");
	othersButton.classList.remove("on");
})

perfumesButton.addEventListener("click", () =>{
	bagsContainer.style.display = "none";
	clothesContainer.style.display = "none";
	beltsContainer.style.display = "none";
	perfumesContainer.style.display = "grid";
	othersContainer.style.display = "none";

	bagsButton.classList.remove("on");
	clothesButton.classList.remove("on");
	beltsButton.classList.remove("on");
	perfumesButton.classList.add("on");
	othersButton.classList.remove("on");
})

othersButton.addEventListener("click", () =>{
	bagsContainer.style.display = "none";
	clothesContainer.style.display = "none";
	beltsContainer.style.display = "none";
	perfumesContainer.style.display = "none";
	othersContainer.style.display = "grid";

	bagsButton.classList.remove("on");
	clothesButton.classList.remove("on");
	beltsButton.classList.remove("on");
	perfumesButton.classList.remove("on");
	othersButton.classList.add("on");
})


function organizeFilter(priceMax){
	var productList = document.querySelectorAll(".card-container")
	productList.forEach((product)=>{
		if(parseFloat(product.dataset.price) <= priceMax){
			product.style.display = "block"
		}
		else{
			product.style.display = "none"
		}
	})
}