function changeTheme() {
    document.getElementById("theme").classList.remove("bg-dark");
    document.getElementById("theme").classList.add("bg-light");
    document.getElementById("btn").classList.remove("btn-dark");
    document.getElementById("btn").classList.add("btn-light");
}
function changeTheme1() {
    document.getElementById("theme").classList.remove("bg-light");
    document.getElementById("theme").classList.add("bg-dark");
    document.getElementById("btn").classList.remove("btn-dark");
    document.getElementById("btn").classList.add("btn-dark");
}

function changeText() {
    document.getElementById("welkome").textContent = "Hello I'm Cublex01";
}
let color =["red", "blue" , "yellow"];

console.log(color.length);


for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
}
