
document.onreadystatechange = () => {
    if(document.readyState == 'complete') {
        (c => {
            let $ = c.getContext("2d"),
            button = document.querySelector(".canvas"),
            width = (c.width = window.innerWidth),
            height = (c.height = window.innerHeight),
            pi2 = 2 * Math.PI,
            random = function(t) { return (t * Math.random()) },
            binRandom = function(f) { return Math.random() > f },
            arr = new Array(40).fill().map(ball => {
                return {
                    pos: {
                        x: random(width),
                        y: random(height)
                    },
                    vel: {
                        x: rnd(1,-1),
                        y: rnd(1,-1)
                    },
                    radius: 10,
                    o: random(1) + 0.5
                };
            });

            /*button.onclick = (event)=>{
                arr.forEach(bl => {
                    if (sqrt(event.clientX,event.clientY,bl.pos.x,bl.pos.y) <= 100) {
                        //alert(event.clientX-bl.pos.x/1000);
                        bl.vel.x = (event.clientX-bl.pos.x)/100;
                        bl.vel.y = (event.clientY-bl.pos.y)/100;
                    }
                });
            };*/

            function draw() {
                (height !== innerHeight || width !== innerWidth) && (width = c.width = innerWidth, height = c.height = innerHeight);
                $.fillStyle = "#ffffff";
                $.fillRect(0, 0, width, height);
                arr.forEach(ball => {
                    ball.pos.x += ball.vel.x;
                    ball.pos.y += ball.vel.y;
                    if (ball.pos.x > width || ball.pos.x < 0) ball.vel.x *= -1;
                    if (ball.pos.y > height || ball.pos.y < 0) ball.vel.y *= -1;
                    arr.forEach(b => {
                        if (!checkpos(ball, b) && sqrt(ball.pos.x,ball.pos.y,b.pos.x,b.pos.y) <= 120) {
                            $.beginPath(); 
                            $.fillStyle = ball.color;
                            $.moveTo(ball.pos.x,ball.pos.y);
                            $.lineTo(b.pos.x,b.pos.y);
                            $.stroke();
                        }
                    });
                    $.beginPath();
                    $.arc(ball.pos.x, ball.pos.y, ball.radius, 0, pi2);
                    $.closePath();
                    $.fillStyle = "#232323";
                    $.fill();
                });
                requestAnimationFrame(draw);
            }
        
            draw();
            
        })(canvas);
    }
};

function checkpos(a,b) {
    return a.pos.x == b.pos.x && a.pos.y == b.pos.y;
}

function rndclr() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function sqrt(first, second, th, f) {
    return Math.sqrt(Math.pow(first-th,2)+Math.pow(second-f,2));
}

function rnd(min, max) {
    return Math.random() * (max - min) + min;
}