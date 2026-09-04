const photoModal =
    document.getElementById("photoModal");

const modalImage =
    document.getElementById("modalImage");

const modalMessage =
    document.getElementById("modalMessage");

const modalClose =
    document.getElementById("modalClose");


/* =========================
   画像をタップ
========================= */

document
    .querySelectorAll(".photoCard img")
    .forEach(function(img){

        img.addEventListener(
            "click",
            function(){

                modalImage.src =
                    img.src;

                modalMessage.innerHTML =
                    img.dataset.message;

                photoModal.style.display =
                    "block";

            }
        );

    });


/* =========================
   閉じる
========================= */

modalClose.addEventListener(
    "click",
    function(){

        photoModal.style.display =
            "none";

        modalImage.src = "";

    }
);


/* =========================
   背景タップでも閉じる
========================= */

photoModal.addEventListener(
    "click",
    function(e){

        if(e.target === photoModal){

            photoModal.style.display =
                "none";

            modalImage.src = "";

        }

    }
);
