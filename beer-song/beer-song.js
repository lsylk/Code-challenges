var BeerSong = function(numBottles){
    this.numBottles = numBottles;
};

BeerSong.prototype.verse = function() {

    if (this.numBottles > 0) {
        return this.numBottles + ' bottles of beer on the wall, ' + this.numBottles + ' bottles of beer.' + ' Take one down and pass it around, ' + (this.numBottles - 1) + ' bottles of beer on the wall.';
    }

};

// Beerson.prototype.sing(){};

module.exports = BeerSong;