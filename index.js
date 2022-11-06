
var tileSIZE = 100;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    tileSIZE = 25;
}
const wrapper = document.getElementById("tiles");
let columns = Math.round(document.body.clientWidth/tileSIZE);
let rows = Math.round(document.body.clientHeight/tileSIZE);


let bg = "";
const colors = [
    "rgb(148, 0, 211)",
    "rgb(75, 0, 130)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 127, 0)",
    "rgb(255, 0 , 0)",
    
]
let count = 0;

function createTile(index){
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = () => handleOnClick(index);
    return tile;
}
function handleOnClick(index){
    let test = document.getElementById("test");
    test.style.backgroundColor = bg;
    
    count++;
    bg = colors[count %(colors.length-1)];

    anime({
        targets: ".tile",
        backgroundColor:bg,
        delay: anime.stagger(50,{
            grid: [columns,rows],
            from:index
        })
    });
}
function createTiles(quantity){
    
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
      });
   
}
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
