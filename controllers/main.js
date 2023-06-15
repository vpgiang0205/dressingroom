import Api from "./../utils/api.js";
const api = new Api();
// GetEle:
const getEle = (id) => document.getElementById(id)


// Call API get Data from dressingroom:
function renderData() {
    api.callApi("dressingroom", "GET", null)
        .then((rs) => {
            // run renderUI of the page
            renderUI(rs.data)
        })
        .catch((error) => {
            console.log(error)
        })
};
renderData()

function renderUI(data) {
    let content = "";
    console.log(data)
    if (data && data.length > 0) {
        data.forEach((product) => {
            content +=
                `
                        <div class="col-lg-3 col-md-6 my-3">
                            <div class="card product text-black h-100">
                            <div class="card__Overlay">
                                        <div class="card__OverlayHeader">
                                        ${product.name}
                                        </div>
                                        <div class="card__OverlayBody">
                                            <a href="">Click here for more details</a>
                                        </div>
                                        <div class = "card__OverlayFooter">
                                        <button type="button" class="" id="btnAdd" onclick="btnAddToCart(${product.id})" >Add to Cart</button>
                                        </div>
                            </div>
                                <img src="${product.img}" class="" alt="${product.name}">
                                <div class="card-body">
                                <p>${product.type}</p>
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">Price: ${product.price}</p>
                                </div>
                            </div>
                        </div>
                            `;
        })
        getEle("productList").innerHTML = content;
    }
}
