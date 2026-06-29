console.log("main.js loaded");

const yes = document.getElementById("yes");
console.log(yes);


const yes = document.getElementById("yes");
const no = document.getElementById("no");

let count = 0;

yes.addEventListener(
    "touchstart",
    yesTouched
);

function yesTouched(e){

    e.preventDefault();

    count++;

    move(yes);

    eventCheck();
}
