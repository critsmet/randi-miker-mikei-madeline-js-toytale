let addToy = false

const addBtn = document.querySelector("#new-toy-btn")
const toyFormContainer = document.querySelector(".container")
const toyCollectionDiv = document.getElementById('toy-collection')

addBtn.addEventListener("click", handleClick)
toyCollectionDiv.addEventListener("click", function(event){
  if (event.target.tagName === "BUTTON"){
    console.log(event.target.previousElementSibling)  
  }
})

function handleClick(){
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyFormContainer.style.display = "block"
  } else {
    toyFormContainer.style.display = "none"
  }
}

function jsonify(fetchResponse){
  return fetchResponse.json()
}

function addToysToDom(jsonArray){
  jsonArray.forEach(putOneToyOnTheDom)
}

function putOneToyOnTheDom(toyObj){
  toyCollectionDiv.innerHTML += `
    <div class="card">
      <h2>${toyObj.name}</h2>
      <img src=${toyObj.image} class="toy-avatar" />
      <p>${toyObj.likes} Likes </p>
      <button data-id="${toyObj.id}" class="like-btn">Like 🧡</button>
    </div>
  `
}

function fetchToys(){
  fetch("http://localhost:3000/toys")
  .then(jsonify)
  .then(addToysToDom)
}

fetchToys()

// ```html
  // <div class="card">
  //   <h2>Woody</h2>
  //   <img src=toy_image_url class="toy-avatar" />
  //   <p>4 Likes </p>
  //   <button class="like-btn">Like <3</button>
  // </div>
// ```
