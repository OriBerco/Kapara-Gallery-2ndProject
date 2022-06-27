/* Import the pictures array */
import {
    pictures
} from './data/pictures.js';


/* Filter the items by search value */
function searchPicture() {
    const searchField = document.getElementById('search-field');
    const searchTerm = searchField.value.trim();

    const searchResult = pictures.filter(pic => {
        return pic.getName().toLowerCase().includes(searchTerm.toLowerCase())
    });
    console.log(searchResult);
    displayPictures(searchResult);
};

const searchButton = document.getElementById(`search-btn`);
searchButton.addEventListener('click', searchPicture);


/* Inject each item with HTML */
function displayPictures(pictureData) {
    const conatiner = document.getElementById('card-container');

    let html = '';

    pictureData.forEach(pic => {
        html +=
            `<div><div class="card" style="margin: 10px; ">
     <img class="card-img-top" src=${pic.getImage()} alt="Card image cap" style="max-height: 30vh">
     <div class="card-body">
    <h5 class="card-title">${pic.getName()}</h5>
    <h6>By: ${pic.getAuthor()}</h6>
    <p>${pic.getPrice()}</p>
    <p class="card-text">${pic.getDescription()}</p>
    <div id="in-stock"> ${showStock()}</div>
    
      </div>
    </div></div>`;

        /* Decide if in stock  */
        function showStock() {

            if (pic.getStock() === false) {
                return `<span class="text-danger"> Item not available.<span>`;
            } else {
                return `<a href="#" id='in-stock'class="btn btn-primary">Buy</a>`;
            }
        }
    });

    conatiner.innerHTML = html;

}

/* Show numbers of items in stock */
function displayTotalPictures() {
    const ItemsinStore = document.getElementById('item-count');
    const count = pictures.length;
    ItemsinStore.innerHTML = '(' + count + ')';


}
displayTotalPictures();
displayPictures(pictures);