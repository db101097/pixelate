var color_arr =[];

// 
function update_color(r,c,color){
    color_arr[r][c] = color; 
}

function add_row(){
    var new_row = new Array(columns);
    for(let i = 0; i <columns;i++){
        new_row[i] = "gray";
    }
    color_arr.push(new_row);
}

function add_col(){
    for(let i = 0; i < columns; i++ ){
        color_arr[i].push("gray"); 
    }
}