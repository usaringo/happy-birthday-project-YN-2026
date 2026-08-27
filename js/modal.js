const modal =
    document.getElementById("modal");

function createNoButtons(){

    // 追加された「いいえ」を削除
    document
        .querySelectorAll(".noClone")
        .forEach(el => el.remove());

    // 「いいえ」を2個複製
    for(let i = 0; i < 2; i++){

        const clone = no.cloneNode(true);

        // IDを削除
        clone.removeAttribute("id");

        // 複製用クラス
        clone.classList.add("noClone");

        // 元のボタンと同じ見た目にする
        clone.style.position = "fixed";
        clone.style.padding = "15px 30px";
        clone.style.fontSize = "20px";
        clone.style.border = "none";
        clone.style.borderRadius = "10px";
        clone.style.background = "";
        clone.style.color = "";

        document.body.appendChild(clone);

        // ランダムな場所へ
        move(clone);

        // 押したらゲームオーバー
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
