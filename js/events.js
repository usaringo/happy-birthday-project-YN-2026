function unlockNo(){

    escapeMode = true;

    no.addEventListener(
        "touchstart",
        function(e){

            e.preventDefault();

            count++;          // ←追加

            move(yes);
            move(no);

            eventCheck();     // ←追加
        }
    );

    move(no);
}

function convertToYesNo(){
    console.log("convertToYesNo");
}

function finalMode(){
    console.log("finalMode");
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

    document.getElementById("gameOver")
        .style.display = "none";
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
