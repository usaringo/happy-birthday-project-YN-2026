const modal =
    document.getElementById("modal");

function createNoButtons(){
    console.log("createNoButtons");
}

function showImageModal(){

    modal.innerHTML = `
        <div id="modalContent">

            <div id="close">×</div>

            <h2>
                緊急速報
            </h2>

            <img
                src="images/pic1.jpg"
                style="
                    width:100%;
                    max-width:500px;
                "
            >

        </div>
    `;

    modal.style.display = "block";

    document
        .getElementById("close")
        .addEventListener(
            "click",
            closeImageModal
        );

function closeImageModal(){
    modal.style.display="none";
    createNoButtons();
}
