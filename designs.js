// Select color input
// Select size input
// Defining variables
var table = document.getElementById('pixelCanvas');
var sizePicker = document.getElementById('sizePicker');
var color = document.getElementById('colorPicker');
var width = document.getElementById('inputWidth').value;
var height = document.getElementById('inputHeight').value;
makeGrid(height, width);


//Adding an event lsitener
sizePicker.addEventListener('click', (event)=> {
    event.preventDefault();

    // Choose size
    var width = document.getElementById('inputWidth').value;
    var height = document.getElementById('inputHeight').value;
    table.firstElementChild.remove();
    makeGrid(height, width);

});
// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {

    // Your code goes here!
    // Make a grid
    for (var q =0; q <= height; q++) {
        let row = table.insertRow(q);
        for (var r = 0; r <= width; r++) {
            let cell = row.insertCell(r);
            cell.addEventListener('click', (event) => {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
