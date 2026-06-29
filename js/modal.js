const modal =
    document.getElementById("modal");

function createNoButtons(){
    console.log("createNoButtons");
}

function showImageModal(){
    modal.style.display="block";
}

function closeImageModal(){
    modal.style.display="none";
    createNoButtons();
}
