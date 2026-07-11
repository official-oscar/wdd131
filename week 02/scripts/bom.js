const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

buttonElement.addEventListener("click", function () {
    if (inputElement.value != "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        const deleteButton = document.createElement("delete");
        deleteButton.textContent = '❌';
        deleteButton.addEventListener("click", function () {
            listElement.removeChild(li);
            inputElement.focus();
        });
        li.appendChild(deleteButton);
        inputElement.value = "";
    }
    inputElement.focus();
});