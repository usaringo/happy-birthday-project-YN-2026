function move(el){

    const maxX =
        window.innerWidth
        - el.offsetWidth
        - 20;

    const maxY =
        window.innerHeight
        - el.offsetHeight
        - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    el.style.left = x + "px";
    el.style.top  = y + "px";
}
