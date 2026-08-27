let gaugeValue = 0;
let charging = false;

function startCharge(){

    console.log("ゲージゲーム開始");

    gaugeValue = 0;
    charging = true;

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

    updateGauge();

    if(gaugeValue >= 100){

        gaugeValue = 100;

        updateGauge();

        stopCharge();
    }
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

    document.getElementById("chargeText")
        .textContent = "MAX！！";

    console.log("ゲージMAX！");
}
