let stackCount = 0;
let movingBlock = null;
let movingTimer = null;
let movingDirection = 1;
let movingX = 0;

const BLOCK_WIDTH = 140;
const BLOCK_HEIGHT = 30;

function startStackGame(){

    console.log("柱積みゲーム開始！");

    // ゲージ画面を消す
    document.getElementById("gaugeBox")
        .style.display = "none";

    document.getElementById("chargeText")
        .style.display = "none";

    document.getElementById("maxButton")
        .style.display = "none";

    // 柱積みゲーム表示
    document.getElementById("stackGame")
        .style.display = "block";

    // 初期化
    stackCount = 0;

    document.getElementById("tower")
        .innerHTML = "";

    createMovingBlock();
}


/* =========================
   流れてくる柱を作る
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
        BLOCK_WIDTH + "px";

    movingBlock.style.height =
        BLOCK_HEIGHT + "px";

    movingBlock.style.position =
        "absolute";

    movingBlock.style.left =
        "0px";

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
   柱を左右に動かす
========================= */

function moveBlock(){

    if(!movingBlock) return;

    movingX += 4 * movingDirection;

    const maxX =
        window.innerWidth - BLOCK_WIDTH;

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

document
    .getElementById("stackButton")
    .addEventListener(
        "touchstart",
        function(e){

            e.preventDefault();

            stopBlock();
        }
    );


function stopBlock(){

    if(!movingBlock) return;

    cancelAnimationFrame(movingTimer);

    const tower =
        document.getElementById("tower");

    const block =
        document.createElement("div");

    block.className =
        "stackBlock";

    block.style.width =
        BLOCK_WIDTH + "px";

    block.style.height =
        BLOCK_HEIGHT + "px";

    block.style.position =
        "absolute";

    block.style.left =
        movingBlock.style.left;

    block.style.bottom =
        (stackCount * BLOCK_HEIGHT + 40) + "px";

    tower.appendChild(block);

    movingBlock.remove();

    movingBlock = null;

    stackCount++;

    // 6段成功
    if(stackCount >= 6){

        stackClear();

        return;
    }

    // 次の柱
    setTimeout(function(){

        createMovingBlock();

    }, 300);
}


/* =========================
   10段成功
========================= */

function stackClear(){

    // 動いている柱を止める
    if(movingTimer){
        cancelAnimationFrame(movingTimer);
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
                ○○さん<br>
                お誕生日おめでとう！！
            </div>

        </div>
    `;

    setTimeout(function(){

        location.href =
            "birthday.html";

    }, 5000);
}
