const yes = document.getElementById("yes");
const no = document.getElementById("no");

let count = 0;
let escapeMode = false;

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
