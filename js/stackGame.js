const maxButton =
    document.getElementById("maxButton");

maxButton.addEventListener(
    "touchstart",
    function(e){

        e.preventDefault();

        startStackGame();
    }
);

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
}
