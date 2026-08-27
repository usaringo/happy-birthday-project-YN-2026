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

    // 通常画面を隠す
    document.getElementById("question").style.display = "none";
    document.getElementById("yes").style.display = "none";
    document.getElementById("no").style.display = "none";

    // ゲージ表示
    document.getElementById("gaugeBox").style.display = "block";

    // 説明表示
    const chargeText =
        document.getElementById("chargeText");

    chargeText.textContent =
        "ゲージをMAXにしろ！！";

    chargeText.style.display = "block";

    // ミニゲーム開始
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
