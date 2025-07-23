let side =16;
const button=document.querySelector("#inputButton");
console.log(button);
button.addEventListener("click",inputButtonEventHandler);

function inputButtonEventHandler (){
    side = prompt("Enter the required side size of square gird",16);
    if (side>100)
        prompt("Side size out of range enter value than 100",16);
    console.log("inside input handler")
    }

const gridContainer = document.querySelector("#container");

 for(i=0;i<side;i++){
    let gridPixelV = document.createElement("div");
    gridPixelV.style.height='20px';
    gridPixelV.classList.add('pixel');
    gridContainer.appendChild(gridPixelV);
    for(j=0;j<side;j++){
        let gridPixelH = document.createElement("div");
        gridPixelH.style.height='20px';
        gridPixelH.style.border='2px solid black';
        gridPixelH.classList.add('pixel');
        gridPixelV.appendChild(gridPixelH);


    }

 }
    