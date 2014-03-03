/*var iStarSize = 150;
var canvasWidth = 550;
var canvasHeight = 400;
var canvas, context;
var x = 1, y = 1, dx = 1, dy = 1;;
var degrees = 0.0;


var render = function() {
    context.clearRect(0, 0, canvasWidth, canvasWidth);
    context.save();
    // set initial position
    context.translate(iStarSize * 1.5, iStarSize * 1.5);
    // set the style properties
    context.fillStyle = '#bbb';
    context.strokeStyle = '#000';
    context.lineWidth = 2;
    // starting custom object - star
    context.beginPath();

    // you can uncomment it to add ordinary rotate
    context.rotate(degrees);

    // changing necessary points to simulate 3d rotating
    context.moveTo( 0, -iStarSize );
    context.lineTo( iStarSize / 10 - x / 5, - iStarSize / 5 );
    context.lineTo( iStarSize / 2 - x, 0 );
    context.lineTo( iStarSize / 10 - x / 5, iStarSize / 5 );
    context.lineTo( 0, iStarSize );
    context.lineTo( -iStarSize / 10 + x / 5, iStarSize / 5 );
    context.lineTo( -iStarSize / 2 + x, 0 );
    context.lineTo( -iStarSize / 10 + x / 5, - iStarSize / 5 );
    context.lineTo( 0, -iStarSize );

    // add shadow to object
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur    = 4;
    context.shadowColor   = 'rgba(180, 180, 180, 0.8)';

    // fill shape, draw stroke
    context.fill();
    context.stroke();
    context.closePath();

    context.restore();

    // echo some debug information
    context.font = '12px Verdana';
    context.fillStyle = '#000';
    context.fillText('x: ' + x + '; y: ' + y, 10, 15);
    context.fillText('dx: ' + dx + '; dy: ' + dy, 10, 30);

};


var run = function() {
    degrees += 0.1;

    if (x + dx > iStarSize/2 || x + dx < -iStarSize/2)
        dx = -dx;
    x += dx;

    //if (y + dy > iStarSize/2 || y + dy < -iStarSize/2) // for future
    //    dy = -dy;
    //y += dy;
    
    render();
};


var start = function() {
    canvas = document.getElementById('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context = canvas.getContext('2d');
    setInterval(run, 1);
};

//window.onload = start;
*/

var getAudioPlayer = function() {
    console.log("OK");
    return document.getElementById('player');
};

var start = function() {
    console.log('`start` invoked');
    var player = getAudioPlayer();
    console.log('good');
    player.play();
    console.log('started');
//    document.
    
    //content/sounds; cp ~/Public/60-minutes-of-underwater-ambient-whale-sounds.mp3
};

window.onload = start;


