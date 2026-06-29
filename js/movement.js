function move(el){

    const x=
        Math.random()*
        (window.innerWidth-el.offsetWidth);

    const y=
        Math.random()*
        (window.innerHeight-el.offsetHeight);

    el.style.left=x+"px";
    el.style.top=y+"px";
}
