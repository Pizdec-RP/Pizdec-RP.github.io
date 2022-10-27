document.addEventListener('DOMContentLoaded',()=>{
    let world = document.querySelector(".main");
    let button = document.querySelector(".theme");
    let circle = document.querySelector(".circle");
    let description = document.querySelectorAll(".description");
    
    circle.classList.toggle("night");
    world.classList.toggle("night");
    description.forEach(element => {
        element.classList.toggle("night");
    });

    button.onclick = ()=>{
        circle.classList.toggle("night");
        world.classList.toggle("night");
        description.forEach(element => {
            element.classList.toggle("night");
        });
    }
});

function redirect() {
    alert("Внимание!!!\nПереходя по ссылке вы подтверждаете что вы реально сексуальный мужик или просто крутая телка")
    window.location.href = 'https:\/\/discord.gg/4ccHSE2CMq';
}