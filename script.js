"use strict"
document.getElementById("table-form").addEventListener("submit", CreateTable);
document.getElementById("table-form").addEventListener("submit", printNumbers);
//document.getElementById("changing-table").addEventListener("click", changeColor);

function CreateTable(e) {
    e.preventDefault();
    let rows = document.getElementById("input-rows").value;
    let cols = document.getElementById("input-cols").value;
    let table = document.getElementById("changing-table");
    table.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (let j = 0; j < cols; j++)
        row.insertCell(j);
    }
}
function printNumbers(e) {
    e.preventDefault();
    let rows = document.getElementById("changing-table").children[0].children;
    for (let i = 0; i < rows.length; i++) {
        let cols = rows[i].children;
        for (let j = 0; j < cols.length; j++) {
                let cell = cols[j];
                cell.innerHTML = `${i+1}${j+1}`;
                cell.addEventListener("click", changeColor)
        }
    }
}
function changeColor() {
    if(this.className.indexOf("colored-cell") !== -1)
        this.classList.remove("colored-cell");
    else this.classList.add("colored-cell");
}

