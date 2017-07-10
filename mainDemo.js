$("#about").hover(function() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("science-menu").style.visibility = "hidden";
    document.getElementById("login-menu").style.visibility = "hidden";
    document.getElementById("press-menu").style.visibility = "hidden";
    document.getElementById("about-menu").style.visibility = "visible";
    document.getElementById("about").style.textDecoration = "underline"; //Color the background paddle into blue might be another choice. 
}, function() {
    document.getElementById("about").style.textDecoration = "none";
})

$("#science").hover(function() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("login-menu").style.visibility = "hidden";
    document.getElementById("press-menu").style.visibility = "hidden";
    document.getElementById("about-menu").style.visibility = "hidden";
    document.getElementById("science-menu").style.visibility = "visible";
    document.getElementById("science").style.textDecoration = "underline"; //Color the background paddle into blue might be another choice. 
}, function() {
    document.getElementById("science").style.textDecoration = "none";
})

$("#product").hover(function() {
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("login-menu").style.visibility = "hidden";
    document.getElementById("press-menu").style.visibility = "hidden";
    document.getElementById("about-menu").style.visibility = "hidden";
    document.getElementById("science-menu").style.visibility = "hidden";
   //Color the background paddle into blue might be another choice. 
}, function() {
    document.getElementById("product").style.textDecoration = "none";
})

$("#login").hover(function() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("science-menu").style.visibility = "hidden";
    document.getElementById("login-menu").style.visibility = "visible";
    document.getElementById("press-menu").style.visibility = "hidden";
    document.getElementById("about-menu").style.visibility = "hidden";
    document.getElementById("login").style.textDecoration = "underline"; //Color the background paddle into blue might be another choice. 
}, function() {
    document.getElementById("login").style.textDecoration = "none";
})
$("#press").hover(function() {
    document.getElementById("menu").style.visibility = "hidden";
    document.getElementById("science-menu").style.visibility = "hidden";
    document.getElementById("login-menu").style.visibility = "hidden";
    document.getElementById("press-menu").style.visibility = "visible";
    document.getElementById("about-menu").style.visibility = "hidden";
    document.getElementById("press").style.textDecoration = "underline"; //Color the background paddle into blue might be another choice. 
}, function() {
    document.getElementById("press").style.textDecoration = "none";
})
