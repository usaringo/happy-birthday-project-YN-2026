function unlockNo(){
    console.log("unlockNo");
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
