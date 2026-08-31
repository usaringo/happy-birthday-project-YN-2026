let gaugeValue = 0;
let charging = false;

function startCharge(){

    console.log("ゲージゲーム開始");

    gaugeValue = 0;
    charging = true;

    document.getElementById("chargeText")
        .textContent = "ゲージをMAXにしろ！！";

    updateGauge();

    document.addEventListener(
        "touchstart",
        chargeGauge
    );
}

function chargeGauge(e){

    if(!charging) return;

    e.preventDefault();

    gaugeValue += 10;

    if(gaugeValue >= 100){

        gaugeValue = 100;

        updateGauge();

        stopCharge();

        return;
    }

    updateGauge();
}

function updateGauge(){

    document.getElementById("gauge")
        .style.height = gaugeValue + "%";
}

function stopCharge(){

    charging = false;

    document.removeEventListener(
        "touchstart",
        chargeGauge
    );

    const chargeText =
        document.getElementById("chargeText");

    chargeText.textContent =
        "🔥 MAX！！🔥\nタップして次のゲームへ！";

    // MAXになったらタップ待ち
    chargeText.style.cursor = "pointer";

    chargeText.addEventListener(
        "touchstart",
        startStackGame,
        { once:true }
    );

    console.log("ゲージMAX！タップ待ち");
}
