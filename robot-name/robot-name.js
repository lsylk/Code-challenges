var Robot = function() {
    this.name = this.generateName();
};

var usedNames = {};

Robot.prototype.generateName = function(){

    var robotName = '' +
        String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
        String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
        Math.floor(Math.random() * 1000);

    if (usedNames[robotName] === undefined) {
        usedNames[robotName] = 1;
        return robotName;
    } else {
        return this.generateName();
    }

};

Robot.prototype.reset = function() {

    this.name = this.generateName();

};

module.exports = Robot;
