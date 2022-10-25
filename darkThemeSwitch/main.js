document.addEventListener('DOMContentLoaded',()=>{
    let world = document.querySelector(".world");
    let button = document.querySelector(".bckgcard");
    let circle = document.querySelector(".circle");
    button.onclick = ()=>{
        circle.classList.toggle("night");
        world.classList.toggle("night");
    }
})