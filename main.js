document.addEventListener('DOMContentLoaded',()=>{
    let world = document.querySelector(".main");
    let button = document.querySelector(".theme");
    let circle = document.querySelector(".circle");
    let description = document.querySelector(".description");
    let description2 = document.querySelector(".description2");
    button.onclick = ()=>{
        circle.classList.toggle("night");
        world.classList.toggle("night");
        description.classList.toggle("night");
        description2.classList.toggle("night");
    }
});