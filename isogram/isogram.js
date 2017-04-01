var Isogram = function(word){
    this.word = word.toLowerCase();
};

Isogram.prototype.isIsogram = function(){

    var letterCount = {};
    var numRepeatedLetters = 0;


    for (var i = 0; i < this.word.length; i++) {

        // Do not add "-" or "space" in the dicctionary.
        if (/[^- ]+$/.test(this.word[i]) === true){

            if (letterCount[this.word[i]] === undefined) {
            letterCount[this.word[i]] = 1;
            
            } else {
                letterCount[this.word[i]] += 1;
                numRepeatedLetters += 1;
            }
        }
    }


   return numRepeatedLetters === 0;


};

module.exports = Isogram;