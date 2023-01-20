let count1 = 0;
let count2 = 0;

let countEl = document.getElementById("count-el");
countEl.textContent = 0;
let countElT = document.getElementById("count-elTwo");
function addone(){
    countEl.textContent = count1 += 1
}
function addtwo(){
    countEl.textContent = count1 += 2
}
function addthree(){
    countEl.textContent = count1 += 3
}


function addO(){
    countElT.textContent = count2 += 1
}
function addT(){
    countElT.textContent = count2 += 2
}
function addTh(){
    countElT.textContent = count2 += 3
}

function reset(){
    count1 = 0;
    count2 = 0;
    countEl.textContent = 0
    countElT.textContent = 0
}