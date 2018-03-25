
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

var lastPeriod = null;

var checkImage = function(hours) {
    //console.log('[' + (new Date()) + '] checkImage invoked');
    if (typeof intervalId !== 'undefined' && intervalId !== null) {
        //console.log('clearing');
        clearTimeout(intervalId);
    }
    if (typeof hours === 'undefined' || hours === null) {
        //console.log('real hours');
        hours = (new Date()).getHours();
    }

    var currentPeriod = getImageNameForHourOfDay(hours);
    if (lastPeriod === null || currentPeriod !== lastPeriod) {
        lastPeriod = currentPeriod;

        var currentStyle = document.documentElement.currentStyle || window.getComputedStyle(document.documentElement, false);
        var currentImage = currentStyle.backgroundImage;

        var newImage = currentImage.replace(/\/images\/[^\/]+/, '/images/' + currentPeriod);
        console.log('Time of day has changed!');
        console.log('Updating background image value: ' + currentStyle.backgroundImage + ' => value: ' + newImage);

        // NB: Accessing the html.backgroundImage property uses a different
        // path than setting it.
        document.documentElement.style.backgroundImage = newImage;
    }
    intervalId = setTimeout(checkImage, 60000);
};

intervalId = setTimeout(checkImage, 5000);

