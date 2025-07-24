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
    hoverColor();
    }

const gridContainer = document.querySelector("#container");
//function that constructs a grid of empty div items//
function constructGrid (){
 for(i=0;i<side;i++){
    let gridPixelV = document.createElement("div");
    const dimension = (400/side);
    gridContainer.appendChild(gridPixelV);
    for(j=0;j<side;j++){
        let gridPixelH = document.createElement("div");
        gridPixelH.style.height=`${dimension}px`;
        gridPixelH.style.width=`${dimension}px`;
        gridPixelH.classList.add('pixel');
        gridPixelH.style.opacity='0.1';
        gridPixelV.appendChild(gridPixelH);


    }

 }
}
// Construct the default grid at the time of loading of page//
constructGrid();

// add hover event listener to paint pixels//

function hoverColor(){
const elementsToColor = document.querySelectorAll(".pixel");

elementsToColor.forEach(elements => {
    elements.addEventListener("mouseenter",()=>{
        const computedStyle = window.getComputedStyle(elements);
        const backgroundColor = computedStyle.backgroundColor;
        if(backgroundColor==='rgba(0, 0, 0, 0)' || backgroundColor ==="transparent"){
        elements.style.backgroundColor=getRandomColor();}
    });
    elements.addEventListener("mouseleave",()=>{
        const currentOpacity = parseFloat(elements.style.opacity) || 1;
        elements.style.opacity= Math.min(currentOpacity+0.1, 1);
    })
})
}
hoverColor();

//function to get random rgb combination

function getRandomColor (){
    const red =Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red},${green},${blue})`;
}