let gaugeValue = 0;
let charging = false;

function startCharge(){

    gaugeValue = 0;
    charging = true;

    document.getElementById("gaugeBox")
        .style.display = "block";

    document.getElementById("chargeText")
        .style.display = "block";

    document.getElementById("maxButton")
        .style.display = "none";

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
        .style.height =
        gaugeValue + "%";
}

function stopCharge(){

    charging = false;

    document.removeEventListener(
        "touchstart",
        chargeGauge
    );

    document.getElementById("chargeText")
        .textContent =
        "🔥 ゲージMAX！！ 🔥";

    // MAXボタンを表示
    document.getElementById("maxButton")
        .style.display = "block";
}
