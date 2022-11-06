const wrapper = document.getElementById("tiles");
let columns = Math.floor(document.body.clientWidth/100);
let rows = Math.floor(document.body.clientHeight/100);
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
    console.log(index);
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
    columns = Math.floor(window.innerWidth/100);
    rows = Math.floor(window.innerHeight /100);
    wrapper.style.setProperty("--columns",columns);
    wrapper.style.setProperty("--rows",rows);
    createTiles(columns * rows);
    
}

window.onload = function() {       
    setTimeout(function(){
        console.log("test");
        createGrid();
    },50); 
}
window.onresize = () => createGrid();
createTiles(columns * rows);