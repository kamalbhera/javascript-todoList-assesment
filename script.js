console.log("Script loaded");
let list = document.getElementById("todo-list");
let inputBox = document.getElementById("input-todo");

// let firstItem = document.getElementById("item1");

var currentInput = "";
inputBox.addEventListener("input", function (e) {
  currentInput = e.target.value;
});
//! Enter button add my task
inputBox.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addList();
  }
});

// ! Function to add my node list
function addList() {
  if (currentInput !== "undefined" && currentInput !== null && currentInput !== "") {
    // adding textnode in the elem
    let newListElement = document.createElement("li");
    let span = document.createElement("span");
    let delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    let textNode = document.createTextNode(currentInput);
    let btnText = document.createTextNode("X");
    delBtn.appendChild(btnText);
    span.appendChild(textNode);
    newListElement.appendChild(span);
    newListElement.appendChild(delBtn);
    // newListElement.appendChild(textNode);
    newListElement.id = "item" + (list.childElementCount + 1);
    //   list.appendChild(newListElement); //adding element in the last
    let firstItem = list.firstElementChild;
    list.insertBefore(newListElement, firstItem);
    inputBox.value = "";
    currentInput = "";
    console.log(list.childElementCount + 1);
  } else {
    alert("Please Enter Some Task ");
  }
}

// click button add my node item
let addBtn = document.getElementById("add-item");
addBtn.addEventListener("click", addList);

// Delete an element
list.addEventListener("click", removeItem);

function removeItem(e) {
  // console.log(e.target.button.delBtn);
  if (e.target.attributes[0].nodeValue === "delBtn") {
    let mainEL = e.target.parentElement;
    list.removeChild(mainEL);
    console.log("Delete Successfuly");
  }
  // console.log(e.target.attributes[0].nodeValue === "delBtn");
}
