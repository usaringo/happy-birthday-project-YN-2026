const modal =
    document.getElementById("modal");

function createNoButtons(){

    // すでに作られている複製を削除
    document
        .querySelectorAll(".noClone")
        .forEach(el => el.remove());

    // いいえを2個複製
    for(let i = 0; i < 2; i++){

        const clone = no.cloneNode(true);

        clone.id = "";

        clone.classList.add("noClone");

        document.body.appendChild(clone);

        move(clone);

        clone.addEventListener(
            "touchstart",
            noTouched
        );
    }
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
}

function closeImageModal(){
    modal.style.display="none";
    createNoButtons();
}
