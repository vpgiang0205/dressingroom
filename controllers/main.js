import Api from './../utils/api.js';
const api = new Api();

// Get element by ID
const getEle = (id) => document.getElementById(id);

// Call API to get data from dressingroom
function renderData() {
    api.callApi("dressingroom", "GET", null)
        .then((rs) => {
            renderNavTab(rs.data);
            let tabPanes = queryTabPanes();
            renderProduct(rs.data, tabPanes);
        })
        .catch((error) => {
            console.log(error);
        });
}

renderData();

const navTab = getEle("navTab");
const tabContent = getEle("tab-content");

function renderNavTab(data) {
    let content = "";
    let contenttab = "";
    if (data && data.length > 0) {
        data.forEach((navArr) => {
            let navbar = navArr.navPills;
            navbar.forEach((navItem) => {
                content += `<li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#${navItem.type}" role="tab" aria-controls="${navItem.tabName}">${navItem.showName}</a>
                            </li>`;
                contenttab += `<div class="tab-pane d-flex" id="${navItem.type}" role="" aria-labelledby="${navItem.type}"></div>`
            });
            tabContent.innerHTML = contenttab;
            navTab.innerHTML = content;
        });
    }
}

function queryTabPanes() {
    return document.querySelectorAll('.tab-pane');
}
function renderProduct(data, panes) {
    let contentProduct = "";
    // Perform actions specific to the active tab
    panes.forEach((pane) => {

        if (data && data.length > 0) {
            data.forEach((tabPanesArr) => {
                let tabPanes = tabPanesArr.tabPanes;
                console.log(pane.id)
                tabPanes.forEach((tab) => {
                    if (tab.type === pane.id) {

                        contentProduct += `<div id="" class = "d-flex flex-column" role="" aria-labelledby="${tab.type}">
                    <img src="${tab.imgSrc_jpg}">
                    ${tab.name}
                    </div>`;
                        pane.innerHTML = contentProduct;
                    }
                });
            });
        }
    });
}


