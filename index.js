document.getElementById('btn').addEventListener("click",clicked);
document.getElementById('btn').addEventListener("dblclick",cliced2);
function clicked(){
    let a = document.getElementById('bulb');
    a.style.boxShadow = "0 0 15px yellow";
    a.style.backgroundColor = "rgb(253, 255, 162)";
}
function cliced2(){
    let a = document.getElementById('bulb');
    a.style.boxShadow = "none";
    a.style.backgroundColor = "white";
}