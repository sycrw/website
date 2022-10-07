
window.addEventListener('scroll', move_logo);
window.addEventListener('scroll', move_description);
window.addEventListener('scroll', move_projects_text);
window.addEventListener('scroll', move_projects_description);
 

function move_logo() {
    var progress = (window.pageYOffset);

    const welcome_logo = document.querySelector('#sycrw');
    var input = ((4*progress)) + "px"; 
    welcome_logo.style.left = input;
     
 }
 
function move_description(){
    const welcome_description = document.querySelector('#sycrw_des');
     var progress = (window.pageYOffset);
     
     var input = (-4*progress) + "px";
     
    welcome_description.style.left = input;
    
    
    

}
function move_projects_text(){
    console.log(window.pageYOffset);
    const project_title = document.querySelector('#projects_title');
    if(window.pageYOffset>=0 && window.pageYOffset<630){
        
        project_title.style.transform ="translate(" + (2100-(window.pageYOffset*3)) + "px," + 0 + "px)";
        
    }
    else{
        
        project_title.style.transform ="translate(" + 0 + "px," + 0 + "px)";
    }

}
function move_projects_description(){
    
    const project_title = document.querySelector('#projects_description');
    if(window.pageYOffset>=200 && window.pageYOffset<830){
        
        project_title.style.transform ="translate(" + (-2100+(window.pageYOffset*3)-200) + "px," + 0 + "px)";
        
    }
    else{
        
        project_title.style.transform ="translate(" + 0 + "px," + 0 + "px)";
    }

}