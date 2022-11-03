document.addEventListener('DOMContentLoaded',()=>{
    let world = document.querySelector(".world");
    let button = document.querySelector(".bckgcard");
    let circle = document.querySelector(".circle");
    let box = document.querySelector(".box");
    let tb = document.querySelector(".titlebox");
    let title = document.querySelector(".title");
    let text = document.querySelectorAll(".text");
    let di = document.querySelector(".dopinfo");
    let subtitle = document.querySelector(".subtitle");
    button.onclick = ()=>{
        n(circle);
        n(world);
        n(box);
        n(tb);
        n(title);
        mn(text);
        n(di);
        n(subtitle);
    }

});

function n(classs) {
    classs.classList.toggle("night");
}

function mn(classes) {
    classes.forEach(element => {
        element.classList.toggle("night");
    });
}