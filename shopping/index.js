let state = {
    cart: [],
    items: ["Nintendo", "Super Nintendo", "Nintendo 64", "Gamecube"],
}

function renderItems(){
    let itemsHTML = "";
    state.items.forEach(function (items, index){
        itemsHTML += `<div class='item' onclick='itemSelected(${index})'>${items}</div>`;
    })
    return itemsHTML;
}

function itemSelected(index){

}


function render(){
    console.log('renderItems() :>> ', renderItems());
    let htmlString = `
    <div>
    Item list<br><br>
    <div class="itemList">
    ${renderItems()}
    </div>
    <br><br>
    </div>`;

    document.getElementById("app").innerHTML=htmlString;
}

render();
