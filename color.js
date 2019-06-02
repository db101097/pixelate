// global variables 
var color_arr =[];
let currentColor = "gray";


function update_color(r,c,color){
    color_arr[r][c] = color; 
}

function addRowToArr(){
    var new_row = new Array(columns);
    for(let i = 0; i <columns;i++){
        new_row[i] = "gray";
    }
    color_arr.push(new_row);
}

function addColToArr(){
    for(let i = 0; i < columns; i++ ){
        color_arr[i].push("gray"); 
    }
}

function getColor() {
    currentColor = document.getElementById("color").value;
}


function resetColor(){
    for(let i =0; i < rows; i++){
        for(let j = 0; j < columns; j++){
            color_arr[i][j] = "gray";
        }
    }
}