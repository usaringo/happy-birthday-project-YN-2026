function unlockNo(){

    // 3回目以降は両方逃げるようにする
    escapeMode = true;

    // 「いいえ」を一度だけ逃がす
    move(no);
}

function convertToYesNo(){
    console.log("convertToYesNo");
}

function finalMode(){

    console.log("10回目！ミニゲーム開始");

    document.getElementById("question").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";

    document.getElementById("gaugeBox").style.display = "block";
    document.getElementById("chargeText").style.display = "block";

    startCharge();
}

function eventCheck(){

    switch(count){

        case 3:
            unlockNo();
            break;

        case 6:
            showImageModal();
            break;

        case 8:
            convertToYesNo();
            break;

        case 10:
            finalMode();
            break;
    }
}

function gameOver(){

    document.getElementById("gameOver")
        .style.display = "block";
}

function continueGame(){

    console.log("continue");

    location.reload();
}

function initGameOver(){

    document
        .getElementById("continue1")
        .addEventListener(
            "click",
            continueGame
        );

    document
        .getElementById("continue2")
        .addEventListener(
            "click",
            continueGame
        );
}

function moveAllNoButtons(){

    move(no);

    document
        .querySelectorAll(".noClone")
        .forEach(el => move(el));
}
