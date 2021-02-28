var data = []

fetchProducts()




async function fetchProducts(){

	try{
		var url = "https://my-json-server.typicode.com/sirsathler/mmapi/products"
		const response = await fetch(url)	
		data = await response.json()
		data.sort((a,b)=>{
			if(a.price > b.price){
				return 1;
			}
			else{
				return -1;
			}
		})
		instantiateCards(data)
		}
	catch(error){
		console.log(error)
	}
}

function productClick(id){
	localStorage.setItem("productId", id)
	window.location.href = "./product.html"
}


function instantiateCards(product){

	var bagsContainer = document.querySelector("#bags-container")
	var clothesContainer = document.querySelector("#clothes-container")
	var beltsContainer = document.querySelector("#belts-container")
	var perfumesContainer = document.querySelector("#perfumes-container")
	var othersContainer = document.querySelector("#others-container")


	data.map((data)=>{
		const cardContent = 
		`			
		<a data-id=${data.id} data-price=${data.price} class="card-container" onclick=productClick(${data.id})>
			<div class="card-img">
				<img src="${data.src}" alt="product-img">
			</div>
			<div class="card-info">
				<h3 class="card-title">${data.title}</h3>
				<h5 class="card-collection">${data.collection}</h5>
				<h4 class="card-price">R$${data.price}</h4>
			</div>
			<p class="buy-button">Confira!</p>
		</a>
		`

		if(data.type == "bags"){
			bagsContainer.innerHTML += cardContent;
		}	
		else if(data.type == "clothes"){
			clothesContainer.innerHTML += cardContent;
		}
		else if(data.type == "belts"){
			beltsContainer.innerHTML += cardContent;
		}
		else if(data.type == "perfumes"){
			perfumesContainer.innerHTML += cardContent;
		}
		else if(data.type == "perfume"){
			perfumesContainer.innerHTML += cardContent;
		}
		else{
			othersContainer.innerHTML += cardContent;
		}
	})
}