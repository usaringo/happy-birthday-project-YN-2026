function unlockNo(){

    escapeMode = true;

    no.addEventListener(
        "touchstart",
        function(e){

            e.preventDefault();

            move(yes);
            move(no);
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
