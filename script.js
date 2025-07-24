let side =16;

// a button with input handler that change the side of grid as per user choice//
const button=document.querySelector("#inputButton");
button.addEventListener("click",inputButtonEventHandler);

function inputButtonEventHandler (){
    side = prompt("Enter the required side size of square gird",16);
    if (side>100)
        prompt("Side size out of range enter value than 100",16);
    // Remove the Initial Grid//
    const elementsToRemove = document.querySelectorAll(".pixel");
    elementsToRemove.forEach(element=>element.remove());

    //Make a new grid based on new side size//
    constructGrid();

    // add hover event listener to paint pixels//

const elementsToColor = document.querySelectorAll(".pixel");

elementsToColor.forEach(elements => {
    elements.addEventListener("mouseover",()=>{
        elements.style.backgroundColor="black";
    })
})
    }

const gridContainer = document.querySelector("#container");
//function that constructs a grid of empty div items//
function constructGrid (){
 for(i=0;i<side;i++){
    let gridPixelV = document.createElement("div");
    const dimension = (400/side);
    gridPixelV.classList.add('pixel');
    gridContainer.appendChild(gridPixelV);
    for(j=0;j<side;j++){
        let gridPixelH = document.createElement("div");
        gridPixelH.style.height=`${dimension}px`;
        gridPixelH.style.width=`${dimension}px`;
       // gridPixelH.style.border='2px solid black';
        gridPixelH.classList.add('pixel');
        gridPixelV.appendChild(gridPixelH);


    }

 }
}
// Construct the default grid at the time of loading of page//
constructGrid();

// add hover event listener to paint pixels//

const elementsToColor = document.querySelectorAll(".pixel");

elementsToColor.forEach(elements => {
    elements.addEventListener("mouseover",()=>{
        elements.style.backgroundColor="black";
    })
})