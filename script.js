let dark = document.getElementById("changed");
let light = document.getElementById("changel");
let def  = document.getElementById("default");

dark.addEventListener("click", function(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "black";
    $(".teme").css("text-shadow", "3px 3px black");
    $(".teme").css("color", "white");
    $(".tema").css("color", "white");
 });

light.addEventListener("click", function(){
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = "white";
    $(".tema").css("color", "black");
    $(".tema").css("text-shadow", "2px 1px blueviolet");
    $(".tema").css("transition-duration", "500ms");
    $(".teme").css("color", "black");
    $(".teme").css("text-shadow", "1px 1px white");
    $(".teme").css("transition-duration", "500ms");
    $("body").css("transition-duration", "500ms");
 }); 

def.addEventListener("click", function(){
    document.body.style.backgroundColor = "#e62293";
    document.body.style.backgroundImage = "url(./img/fundo-do-código-binário-wallpaper-digital-papel-de-parede-mundial-com-cores-roxas-cor-rosa-vermelha-226184723.jpg)";
    $(".teme").css("text-shadow", "3px 3px black");
    $(".teme").css("color", "white");
    $(".tema").css("color", "white");
 });

 $('.header a[href^="#"]').on('click', function(e) { 
	e.preventDefault();
	var id = $(this).attr('href');
	targetOffset = $(id).offset().top;	
	$('html, body').animate({ 
		scrollTop: targetOffset}, 500);
});

 

 

