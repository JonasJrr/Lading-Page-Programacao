let dark = document.getElementById("changed");
let light = document.getElementById("changel");
let def  = document.getElementById("default");

dark.addEventListener("click", function(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "black";
    $(".tema").css("color", "white");
    $(".teme").css("text-shadow", "3px 3px black");
    $(".teme").css("color", "white");
 });

light.addEventListener("click", function(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "white";
    $(".tema").css("color", "black");
    $(".tema").css("text-shadow", "2px 1px blueviolet");
    $(".teme").css("color", "black");
    $(".teme").css("text-shadow", "1px 1px white");
    $(".tema").css("transition-duration", "500ms");
 }); 

def.addEventListener("click", function(){
    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundImage = "url(./img/fundo-do-código-binário-wallpaper-digital-papel-de-parede-mundial-com-cores-roxas-cor-rosa-vermelha-226184723.jpg)";
    $(".tema").css("color", "white");
    $(".teme").css("text-shadow", "3px 3px black");
    $(".teme").css("color", "white");
 });

 

 

