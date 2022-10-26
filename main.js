document.addEventListener('DOMContentLoaded',()=>{
    let world = document.querySelector(".main");
    let button = document.querySelector(".theme");
    let circle = document.querySelector(".circle");
    let description = document.querySelector(".description");
    let preimushestva = document.querySelector(".preimushestva");
    let invite = document.querySelector(".invite");
    button.onclick = ()=>{
        circle.classList.toggle("night");
        world.classList.toggle("night");
        description.classList.toggle("night");
        preimushestva.classList.toggle("night");
        invite.classList.toggle("night");
    }
});