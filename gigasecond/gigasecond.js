

var Gigasecond = function(inputDate){
    this.inputDate = inputDate;
};

// returns given date plus gigaseconds later.

Gigasecond.prototype.date = function(){

    return new Date(this.inputDate.getTime() + 1e12);
};

module.exports = Gigasecond;