let item = document.querySelector(".input-data")
let list = document.querySelector(".list")

function newItem(toDo){
    toDoItem = `<li>
        <p id="item">${(toDo)}</p>
        <i class="fa-solid fa-trash" job="delete"</i>
        </li>`

        const position = "beforeend";
        list.insertAdjacentHTML(position, toDoItem);
}

function addItem(){
    let toDo = item.value;
    if(toDo){
        newItem(toDo);
        item.value ="";
    }
}


item.addEventListener("keyup", function(event){
    if(event.keyCode===13){
        event.preventDefault();
        let toDo = item.value;
        if(toDo){
            newItem(toDo);
            item.value = "";
        }
    }
});

list.addEventListener("click", function(event){
    let element = event.target;
    const removeJob = event.target.attributes.job.value;
    if(removeJob=="delete"){
        removeToDo(element);
    }
})
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}