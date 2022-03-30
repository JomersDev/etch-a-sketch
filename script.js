const divContainer = document.getElementById("container");

//function that generates a grid based on user input of how many squares per side
function createGrid(squares) {
    let divCount = 0;

    while (divCount < squares * squares) {
        //create div element
        const newDiv = document.createElement("div");
        console.log("add");
        //assigning the new div with 'div-design' css class
        newDiv.classList.add('div-design');
        //assigning height and width properties of div-design class to change based on user input and ensure grid stays 600x600
        newDiv.style.width = ((600/squares) - 3) + "px";
        newDiv.style.height = ((600/squares) - 3) + "px";
        //appending the div to the divContainer
        divContainer.appendChild(newDiv);
        //event listener added to divs for mouseover effect
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black";
        })
        divCount++;
    }
}


//default grid size of 16x16
createGrid(16);

//function that refreshes the page and allows user to determine the amount of squares per side
function refreshPage(){
    document.querySelectorAll(".div-design").forEach(e => e.remove());
    let squares = prompt("Enter how many squares per side below");
    if (squares > 100) {
        createGrid(16);
        alert("ERROR: Squares per side cannot exceed 100!");
        return;
    }
    createGrid(squares);
} 
