const input = document.querySelector("#favchap"); // Lo que escribe el usuario
const addButton = document.querySelector("button"); // Botón para agregar entrada
const list = document.querySelector("#list"); // Lista de capítulos

addButton.addEventListener("click", () => {
    const favBook = input.value.trim(); // Obtiene el valor ingresado y elimina espacios extra

    if (favBook !== "") { // Evita añadir entradas vacías
        const listItem = document.createElement("li"); // Crea un nuevo elemento de lista
        const listText = document.createElement("span"); // Crea un <span> para el texto
        const deleteButton = document.createElement("button"); // Botón para eliminar

        listText.textContent = favBook;
        deleteButton.textContent = "❌";

        listItem.appendChild(listText);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        input.value = "";  //Limpia el ingreso de texto

        deleteButton.addEventListener("click", () => {
            list.removeChild(listItem);
        });

        input.focus(); // Regresa el foco al campo de entrada
    } else {
        alert("Enter a valid book and Chapter.");
    }
});