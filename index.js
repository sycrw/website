
window.addEventListener('scroll', move_logo);
window.addEventListener('scroll', move_description);

function move_logo() {
    const welcome_logo = document.querySelector('#sycrw');
     var progress = (window.pageYOffset);
     
     var input = progress + "px";
     
    welcome_logo.style.left = input;
    
    
 }
 
function move_description(){
    const welcome_description = document.querySelector('#sycrw_des');
     var progress = (-window.pageYOffset);
     
     var input = progress + "px";
     
    welcome_description.style.left = input;
    
    

}