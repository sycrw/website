let navbarOn;
var mobile;
init();
//navbar-----
function handleNavbarClick(){
    let navbar = document.getElementById("navbar");
    let Button = document.getElementById("navbarButton");
    if(mobile){
        if(navbarOn){
            navbar.style.top = "-210px";
            Button.style.marginTop = "75px";
            navbar.style.backgroundColor = "rgb(0,0,0,0)";
            for(let i = 1;i<=3;i++){
                document.getElementById("line"+i).style.backgroundColor = "var(--col2)";
            }

        }else{
            navbar.style.top = "0";
            Button.style.marginTop = "0";
            navbar.style.backgroundColor = "var(--col2)";
            for(let i = 1;i<=3;i++){
                document.getElementById("line"+i).style.backgroundColor = "var(--col1)";
            }
        }
        
    }else{
        if(navbarOn){
            navbar.style.top = "-100px";
            Button.style.marginTop = "100px";
            navbar.style.backgroundColor = "rgb(0,0,0,0)";
            for(let i = 1;i<=3;i++){
                document.getElementById("line"+i).style.backgroundColor = "var(--col2)";
            }

        }else{
            navbar.style.top = "0";
            Button.style.marginTop = "0";
            navbar.style.backgroundColor = "var(--col2)";
            for(let i = 1;i<=3;i++){
                document.getElementById("line"+i).style.backgroundColor = "var(--col1)";
            }
        }
        
    }
    
    navbarOn = !navbarOn;
}
//close navbar
function closeNavbar(){
    if(mobile){
        handleNavbarClick();
    }
}
//init
function init(){
    let navbar = document.getElementById("navbar");
    let Button = document.getElementById("navbarButton");
    if(window.innerWidth <= 1000){
        navbarOn = false;
        mobile = true;
        navbar.style.top = "-210px";
            Button.style.marginTop = "75px";
            navbar.style.backgroundColor = "rgb(0,0,0,0)";
            for(let i = 1;i<=3;i++){
                document.getElementById("line"+i).style.backgroundColor = "var(--col2)";
            }
        
    }
    else{
        navbarOn = true;
        mobile = false;
    }
}
//load piCalc
function loadPiCalc(){
    window.location = "PiCalc.html";
}
//load Memes
function loadMemes(){
    window.location = "Memes.html";
}