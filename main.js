
var getAudioPlayer = function() {
    return document.getElementById('player');
};

var start = function() {
    var player = getAudioPlayer();
    setTimeout(function(){
    player.play();
    }, 500);
    //console.log('started');
};

window.onload = start;

var stop = function() {
    var player = getAudioPlayer();
    setTimeout(function(){
    player.pause();
    }, 50);
    //console.log('paused');
};

var toggle = function(currentState) {
    var player = getAudioPlayer();
    var v = player.volume;
    player.volume = 0.50;
    if (currentState === 'pause') {
        var nextState = 'play';
        stop();
        setTimeout(function(){ player.volume = v; }, 1);
    } else if (currentState === 'play') {
        var nextState = 'pause';
        start();
        setTimeout(function(){ player.volume = v; }, 1000);
    } else {
        throw 'unrecognized currentState=' + currentState;
    }

    var id = currentState + '-btn';
    //console.log('id=' + id);
    var btn = document.getElementById(id);
    btn.id = nextState + '-btn';
    btn.onclick = function() {
        //console.log('nextState=' + nextState);
        toggle(nextState);
    };
};

var getImageNameForHourOfDay = function(hour) {
    if (hour >= 6 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 17) {
        return 'afternoon';
    } else if (hour >= 17 || hour < 9) {
        return 'afternoon';
    } else {
        throw 'bad hour given: ' + hour;
    };
};

var intervalId;
var checkImage = function(hours) {
    if (typeof intervalId !== 'undefined' && intervalId !== null) {
        //console.log('clearing');
        clearTimeout(intervalId);
    }
    //console.log('[' + (new Date()) + '] checkImage invoked');
    if (typeof hours === 'undefined' || hours === null) {
        //console.log('real hours');
        /*var*/ hours = (new Date()).getHours();
    }

    var currentStyle = document.body.currentStyle || window.getComputedStyle(document.body, false);
    var currentImageUrl = currentStyle.backgroundImage.replace(/\/|\(|\)/g, '.').replace(/\.+$/, '');

    var currentPeriod = getImageNameForHourOfDay(hours);
    var newImageUrl = ('content/images/' + currentPeriod + '/image.jpg').replace(/\/|\(|\)/g, '.');
    //console.log(newImageUrl);
    //console.log(currentImageUrl);
    if (!(new RegExp('.*' + newImageUrl + '$')).test(currentImageUrl)) {
        console.log('Updating background image from=' + currentStyle.backgroundImage + ', to=' + newImageUrl);
        document.body.className = currentPeriod;
    }
    intervalId = setTimeout(checkImage, 60000);
};

intervalId = setTimeout(checkImage, 5000);

