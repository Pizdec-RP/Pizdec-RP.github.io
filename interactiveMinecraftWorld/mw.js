document.addEventListener('DOMContentLoaded',()=>{
    //alert("zbs")
    var canvas = document.getElementById("world");
    var ctx = canvas.getContext("2d");
    ctx.fillRect(0,0, canvas.width, canvas.height);
    let width = 10, height = 20;
    blocks = worldgen();
    drawWorld(blocks, ctx);

})

function drawWorld(blockarray, context) {
    for (y = 0; y < blockarray.length; y++) {
        for (x=0; x < blockarray[0].length; x++) {
            let name = idToBlock(blockarray[y][x]);
            if (name != null) {
                img = new Image();
                Image.src = "textures/"+name+".png";
                base_image.onload = function(){
                    context.drawImage(base_image, x*10, y*10, 10, 10);
                }
            }
        }
    }
}

function idToBlock(id) {
    if (id == 0) return null;
    else if (id == 1) return "bedrock";
    else if (id == 2) return "stone";
    else if (id == 3) return "dirt";
    else if (id == 4) return "grass_block_side";
    else return null;
}
//air-0 bedrock-1 stone-2 dirt-3 grass-4
function worldgen(width, height) {
    var blocks = new Array(height);
    let skyheight = height - height * 0.25;
    let groundheight = height - height * 0.38;
    let dirtends = groundheight - 4;
    let bedrock = groundheight * 0.1;

    for (y = 0; y < height; y++) {
        yceil = new Array(width);
        blocks[y] = yceil;
        for (x=0; x < width; x++) {
            if (y <= bedrock) {
                blocks[y][x] = 1;
            } else if (y > bedrock && y <= dirtends) {
                blocks[y][x] = 2;
            } else if (y > dirtends && y <= groundheight) {
                if (y == groundheight) {
                    blocks[y][x] = 3;
                } else {
                    blocks[y][x] = 4;
                }
            } else if (y > groundheight && y <= skyheight) {
                blocks[y][x] = 0;
            } else {
                blocks[y][x] = 0;
            }
        }
    }
    return blocks;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}