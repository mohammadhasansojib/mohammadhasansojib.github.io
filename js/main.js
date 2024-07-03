let nav_btn = document.getElementById("nav-btn");
let navbar = document.getElementById("navbar");

nav_btn.addEventListener("click", function (){

    if(navbar.style.display == "block"){
        navbar.style.display = "none";
    }else{
        navbar.style.display = "block";
    }

})

console.log(navbar.style.display);