function unlockNo(){

    no.addEventListener(
        "touchstart",
        function(e){

            e.preventDefault();

            move(no);
        }
    );

    // 最初に一回移動させて
    // 「あっ逃げた！」感を演出
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
