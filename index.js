
var tileSIZE =50;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    tileSIZE = 50;
}
const wrapper = document.getElementById("tiles");
let columns,rows;
document.getElementById("this_is_sycrw").style.opacity = 0;
document.getElementById("open").style.opacity = 1;

let toggled = false;
//on click tile onimate
function handleOnClick(index){
    toggled = !toggled;
    anime({
        targets: "#open",
        opacity: toggled ? 0:1,
        duration:7000
    })
    anime({
        targets: "#this_is_sycrw",
        opacity: toggled ? 1:0,
        duration:7000
    })
    anime({
        targets: ".tile",
        opacity: toggled ? 0:1,
        delay: anime.stagger(50,{
            grid: [columns,rows],
            from:index
        })
    });
}
//creates on tile to be passed on to create Tilesssss
function createTile(index){
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = () => handleOnClick(index);
    tile.style.opacity = toggled ? 0 : 1;
    return tile;
}
//Create all tiles
function createTiles(quantity){
    
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
      });
   
}
// creates grid : calculates how many boxes are needed then gives it to create tiles
function createGrid(){
    
    wrapper.innerHTML = "";
    columns = Math.floor(window.innerWidth/tileSIZE);
    rows = Math.floor(window.innerHeight /tileSIZE);
    wrapper.style.setProperty("--columns",columns);
    wrapper.style.setProperty("--rows",rows);
    createTiles(columns * rows);
    console.log(rows);
    console.log();
    
}
//eventlistener when resize
window.onresize = () =>{
    createGrid();
}
// first call wenn loaded

createGrid();
// load again to fix bug
window.onload = function() {       
    setTimeout(function(){
        createGrid();
    },50); 
}
