let nav_btn = document.getElementById("nav-btn");
let navbar = document.getElementById("navbar");

nav_btn.addEventListener("click", function (){

    if(navbar.style.display == "none"){
        navbar.style.display = "block";
    }else{
        navbar.style.display = "none";
    }

})

console.log(navbar.style.display);