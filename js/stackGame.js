const maxButton =
    document.getElementById("maxButton");

maxButton.addEventListener(
    "touchstart",
    function(e){

        e.preventDefault();

        console.log("MAXタップ");

        startStackGame();

    },
    { passive:false }
);


let stackCount = 0;
let movingBlock = null;
let movingTimer = null;

let movingDirection = 1;
let movingX = 0;

const BLOCK_HEIGHT = 30;

let blockWidth = 140;


/* =========================
   柱積みゲーム開始
========================= */

function startStackGame(){

    console.log("柱積みゲーム開始！");

    document.getElementById("gaugeBox")
        .style.display = "none";

    document.getElementById("chargeText")
        .style.display = "none";

    document.getElementById("maxButton")
        .style.display = "none";

    document.getElementById("stackGame")
        .style.display = "block";

    stackCount = 0;

    blockWidth = 140;

    document.getElementById("tower")
        .innerHTML = "";

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

    document.getElementById("stackGame")
        .appendChild(movingBlock);

    movingX = 0;

    movingDirection = 1;

    movingTimer =
        requestAnimationFrame(moveBlock);
}


/* =========================
   左右に動かす
========================= */

function moveBlock(){

    if(!movingBlock) return;

    movingX +=
        4 * movingDirection;

    const maxX =
        window.innerWidth -
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
   PUSH!!
========================= */

function setupStackButton(){

    const button =
        document.getElementById("stackButton");

    if(!button) return;

    button.addEventListener(
        "touchstart",
        function(e){

            e.preventDefault();

            stopBlock();

        },
        { passive:false }
    );
}


/* =========================
   柱を止める
========================= */

function stopBlock(){

    if(!movingBlock) return;

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
       下の柱を取得
    ========================= */

    const previousBlocks =
        document.querySelectorAll(
            ".stackBlock"
        );

    const previous =
        previousBlocks[
            previousBlocks.length - 1
        ];


    const previousLeft =
        parseFloat(previous.style.left);

    const previousWidth =
        parseFloat(previous.style.width);


    const currentLeft =
        movingX;

    const currentRight =
        currentLeft + blockWidth;

    const previousRight =
        previousLeft + previousWidth;


    /* =========================
       重なっている範囲
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
        overlapRight - overlapLeft;


    /* =========================
       完全に外れた
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
        "現在：" +
        stackCount +
        "段"
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

function addBlock(left, width){

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

    block.style.bottom =
        (stackCount *
        BLOCK_HEIGHT +
        40) + "px";

    tower.appendChild(block);
}


/* =========================
   次の柱
========================= */

function createNextBlock(){

    setTimeout(function(){

        createMovingBlock();

    },300);
}


/* =========================
   ゲームオーバー
========================= */

function stackGameOver(){

    document.getElementById("stackGame")
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
            "touchstart",
            function(e){

                e.preventDefault();

                location.reload();

            },
            { passive:false }
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

    document.getElementById("stackGame")
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


    setTimeout(function(){

        location.href =
            "birthday.html";

    },5000);
}


/* =========================
   ゲーム開始時
========================= */

setupStackButton();
