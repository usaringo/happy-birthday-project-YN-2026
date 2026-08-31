function startStackGame(){

    console.log("柱積みゲーム開始！");

    // ゲージを隠す
    document.getElementById("gaugeBox")
        .style.display = "none";

    document.getElementById("chargeText")
        .style.display = "none";

    // 柱積みゲームを表示
    document.getElementById("stackGame")
        .style.display = "block";
}
