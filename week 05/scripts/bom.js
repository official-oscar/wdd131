const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// 1. Load chapters from localStorage when page loads. If none, use empty array
let chaptersArray = getChapterList() || [];

// 2. Display all saved chapters on load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// 3. Add Chapter Button Click
buttonElement.addEventListener("click", function () {
    if (inputElement.value.trim() !== "") { // prevent empty entries
        displayList(inputElement.value); // show on screen
        chaptersArray.push(inputElement.value); // add to array
        setChapterList(); // save to localStorage
        inputElement.value = ""; // clear input
        inputElement.focus(); // focus back
    }
});

// 4. FUNCTION: Display a chapter in the list with delete button
function displayList(item) {
    const li = document.createElement("li");
    li.textContent = item; // set chapter text

    const deleteButton = document.createElement("button");
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // for CSS styling

    li.appendChild(deleteButton); // add button to li
    listElement.appendChild(li);

    // Delete button click event
    deleteButton.addEventListener("click", function () {
        listElement.removeChild(li); // remove from screen
        deleteChapter(li.textContent); // remove from array + localStorage
        inputElement.focus();
    });
}

// 5. FUNCTION: Save array to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// 6. FUNCTION: Get array from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// 7. FUNCTION: Delete a chapter from array and localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // remove the ❌ from the end
    chaptersArray = chaptersArray.filter((item) => item !== chapter); // keep all except deleted one
    setChapterList(); // update localStorage
}

inputElement.focus(); // focus on input when page loads