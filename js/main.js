initGameOver();
const yes = document.getElementById("yes");
const no = document.getElementById("no");

let count = 0;
let escapeMode = false;

yes.addEventListener(
    "touchstart",
    yesTouched
);
no.addEventListener(
    "touchstart",
    noTouched
);

function yesTouched(e){

    e.preventDefault();

    count++;

    if(escapeMode){
        move(yes);
        move(no);
    }else{
        move(yes);
    }

    eventCheck();
}
function noTouched(e){

    e.preventDefault();

    gameOver();
}
