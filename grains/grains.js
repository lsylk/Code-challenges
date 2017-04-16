var BigInt = require('./big-integer');

var Grains = function (){};

Grains.prototype.square = function(numSquare){

      var totalGrains = BigInt(2).pow(numSquare - 1);

      return totalGrains.toString();
};

Grains.prototype.total = function (){

  var that = this; //self

  var totalHelper = function (numSquare) { //free floating function, does not have this.

    if (numSquare > 0){

      var totalGrains = BigInt(that.square(numSquare));

      return totalGrains.add(totalHelper(numSquare - 1)); // add is a method of BigInt. And totalHelper will return a BigInt. 
    
    } else {
      return BigInt(0);
    }

  };

  return totalHelper(64).toString();

};

module.exports = Grains;
