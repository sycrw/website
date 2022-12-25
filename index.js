addEventListener("scroll", (event) => {
    manageNavbarOnScroll();
});
function manageNavbarOnScroll(){
    let navbar = document.getElementById("navbar");
    if(scrollY<=10){
        navbar.className = "navbar_shown";
    }
    else{
        navbar.className = "navbar_hidden";
    }
}

