/* =========================
   柱積みゲーム
========================= */

let stackCount = 0;
let movingBlock = null;
let movingTimer = null;

let movingDirection = 1;
let movingX = 0;

const BLOCK_HEIGHT = 30;

let blockWidth = 140;


/* =========================
   MAXボタン
========================= */

document
    .getElementById("maxButton")
    .addEventListener(
        "click",
        function(){

            console.log("MAXタップ");

            startStackGame();

        }
    );


/* =========================
   柱積みゲーム開始
========================= */

function startStackGame(){

    console.log("柱積みゲーム開始！");

    const gaugeBox =
        document.getElementById("gaugeBox");

    const chargeText =
        document.getElementById("chargeText");

    const maxButton =
        document.getElementById("maxButton");

    const stackGame =
        document.getElementById("stackGame");

    const tower =
        document.getElementById("tower");


    /* ゲージ画面を消す */

    gaugeBox.style.display = "none";

    chargeText.style.display = "none";

    maxButton.style.display = "none";


    /* 柱ゲーム表示 */

    stackGame.style.display = "block";


    /* 初期化 */

    stackCount = 0;

    blockWidth = 140;

    tower.innerHTML = "";


    /* 最初の柱 */

    createMovingBlock();
}


/* =========================
   動く柱を作る
========================= */

function createMovingBlock(){

    if(movingBlock){

        movingBlock.remove();

    }


    movingBlock =
        document.createElement("div");


    movingBlock.className =
        "movingStackBlock";


    movingBlock.style.width =
        blockWidth + "px";


    movingBlock.style.height =
        BLOCK_HEIGHT + "px";


    movingBlock.style.position =
        "absolute";


   movingBlock.style.top =
       "150px";


    movingBlock.style.background =
        "#ff00ff";


    movingBlock.style.border =
        "5px outset #ffff00";


    movingBlock.style.zIndex =
        "600";


    document
        .getElementById("stackGame")
        .appendChild(movingBlock);


    movingX = 0;

    movingDirection = 1;


    movingTimer =
        requestAnimationFrame(moveBlock);
}


/* =========================
   柱を左右に動かす
========================= */

function moveBlock(){

    if(!movingBlock){

        return;

    }


    movingX +=
        4 * movingDirection;


    const stackGame =
        document.getElementById("stackGame");


    const maxX =
        stackGame.clientWidth -
        blockWidth;


    if(movingX >= maxX){

        movingX = maxX;

        movingDirection = -1;

    }


    if(movingX <= 0){

        movingX = 0;

        movingDirection = 1;

    }


    movingBlock.style.left =
        movingX + "px";


    movingTimer =
        requestAnimationFrame(moveBlock);
}


/* =========================
   PUSHボタン
========================= */

document
    .getElementById("stackButton")
    .addEventListener(
        "click",
        function(){

            stopBlock();

        }
    );


/* =========================
   柱を止める
========================= */

function stopBlock(){

    if(!movingBlock){

        return;

    }


    cancelAnimationFrame(
        movingTimer
    );


    /* =========================
       1段目
    ========================= */

    if(stackCount === 0){

        addBlock(
            movingX,
            blockWidth
        );


        movingBlock.remove();

        movingBlock = null;


        stackCount++;


        createNextBlock();

        return;
    }


    /* =========================
       一番上の柱
    ========================= */

    const blocks =
        document.querySelectorAll(
            "#tower .stackBlock"
        );


    const previous =
        blocks[blocks.length - 1];


    const previousLeft =
        parseFloat(
            previous.style.left
        );


    const previousWidth =
        parseFloat(
            previous.style.width
        );


    const currentLeft =
        movingX;


    const currentRight =
        currentLeft +
        blockWidth;


    const previousRight =
        previousLeft +
        previousWidth;


    /* =========================
       重なった部分
    ========================= */

    const overlapLeft =
        Math.max(
            currentLeft,
            previousLeft
        );


    const overlapRight =
        Math.min(
            currentRight,
            previousRight
        );


    const overlapWidth =
        overlapRight -
        overlapLeft;


    /* =========================
       完全に外した
    ========================= */

    if(overlapWidth <= 0){

        movingBlock.remove();

        movingBlock = null;

        stackGameOver();

        return;
    }


    /* =========================
       重なった部分だけ残す
    ========================= */

    blockWidth =
        overlapWidth;


    addBlock(
        overlapLeft,
        overlapWidth
    );


    movingBlock.remove();

    movingBlock = null;


    stackCount++;


    console.log(
        "現在 " +
        stackCount +
        " 段"
    );


    /* =========================
       6段完成
    ========================= */

    if(stackCount >= 6){

        stackClear();

        return;
    }


    createNextBlock();
}


/* =========================
   柱を追加
========================= */

function addBlock(
    left,
    width
){

    const tower =
        document.getElementById("tower");

    const block =
        document.createElement("div");

    block.className =
        "stackBlock";

    block.style.width =
        width + "px";

    block.style.height =
        BLOCK_HEIGHT + "px";

    block.style.position =
        "absolute";

    block.style.left =
        left + "px";


    /*
       PUSHボタンより上に
       柱を積み上げる
    */

    const stackBottom = 140;

    block.style.bottom =
        (
            stackBottom +
            stackCount * BLOCK_HEIGHT
        ) + "px";


    block.style.background =
        "#00ffff";

    block.style.border =
        "5px outset #ffff00";

    block.style.zIndex =
        "550";

    tower.appendChild(block);
}

/* =========================
   次の柱
========================= */

function createNextBlock(){

    setTimeout(
        function(){

            createMovingBlock();

        },
        300
    );
}


/* =========================
   ゲームオーバー
========================= */

function stackGameOver(){

    if(movingTimer){

        cancelAnimationFrame(
            movingTimer
        );

    }


    document
        .getElementById("stackGame")
        .innerHTML = `

        <div id="stackGameOver">

            <h1>
                GAME OVER
            </h1>

            <p>
                柱が崩れました……
            </p>

            <button id="stackRetry">
                もう一度挑戦！
            </button>

        </div>
    `;


    document
        .getElementById("stackRetry")
        .addEventListener(
            "click",
            function(){

                location.reload();

            }
        );
}


/* =========================
   6段完成
========================= */

function stackClear(){

    if(movingTimer){

        cancelAnimationFrame(
            movingTimer
        );

    }


    document
        .getElementById("stackGame")
        .innerHTML = `

        <div id="cakeComplete">

            <div class="cakeMessage">
                🎉 CAKE COMPLETE!! 🎉
            </div>

            <div class="cake">

                <div class="candle">
                    🔥
                </div>

                <div class="cakeTop">
                    🎂
                </div>

                <div class="cakeBody">
                    HAPPY
                </div>

                <div class="cakeBottom">
                    BIRTHDAY
                </div>

            </div>

            <div class="cakeText">

                中俣さん<br>

                お誕生日おめでとう！！

            </div>

        </div>
    `;


    setTimeout(
        function(){

            location.href =
                "birthday.html";

        },
        1800
    );
}
