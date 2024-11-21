const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const listItem = document.createElement("li");   //Crea un item para la lista
const deleteButton = document.createElement("button"); 

listItem.textContent = input.value;  //Guarda el texto de entrada en la variable del listItem
deleteButton.textContent = "❌";
listItem.append(deleteButton);

list.append(listItem);

