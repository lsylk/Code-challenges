var BeerSong = function(){};

BeerSong.prototype.verse = function(numBottles) {

    var currentBottles = '';
    var leftBottles = '';
    var numTaken = '';

    if (numBottles > 1) {

        currentBottles = numBottles + ' bottles';
        leftBottles = numBottles - 1 + ' bottles';
        numTaken = 'one';
    }

    if (numBottles === 2) {

        currentBottles = numBottles + ' bottles';
        leftBottles = numBottles - 1 + ' bottle';
        numTaken = 'one';
    }

    if (numBottles === 1) {

        currentBottles = numBottles + ' bottle';
        leftBottles = 'no more bottles';
        numTaken = 'it';
    }

    if (numBottles === 0) {

        return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
    }

    return `${currentBottles} of beer on the wall, ${currentBottles} of beer.\nTake ${numTaken} down and pass it around, ${leftBottles} of beer on the wall.\n`

};

BeerSong.prototype.sing = function(start, stop){

    //Set default value for stop as 0.

    stop = stop || 0;

    var totalVerses = '';

    for (var i = start; i >= stop; i--) {

        totalVerses += this.verse(i) + (i != stop ? '\n': '');
    }

    return totalVerses;

};

module.exports = BeerSong;