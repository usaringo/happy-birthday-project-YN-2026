let gaugeValue = 0;
let charging = false;

function startCharge(){

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

    document.getElementById("chargeText")
        .textContent =
        "MAX！！";
}
