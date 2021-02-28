var data
var cardContainer = document.querySelector(".card-container")

async function fetchData(id){

	try{
		var url = "https://my-json-server.typicode.com/sirsathler/mmapi/products/" + id
		const response = await fetch(url)	
		data = await response.json()
		console.log(data)
		mountPage()
		}
	catch(error){
		console.log(error)
	}
}


function mountPage() {
	var title = document.querySelector(".card-title")
	var collection = document.querySelector(".card-collection")
	var price = document.querySelector(".card-price")
	var img = document.querySelector(".img")


	title.innerHTML = data.title;
	collection.innerHTML = data.collection;
	price.innerHTML = "R$"+data.price;
	img.setAttribute("src", data.src)

	cardContainer.style.display = "flex"
}

window.addEventListener("load", () => {
	fetchData(localStorage.getItem("productId"))
})