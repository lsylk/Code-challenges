var Anagram = function(word){
    this.word = word;
};

Anagram.prototype.matches = function(wordList){

    var words = wordList;
    if (!Array.isArray(words)) {
        words = arguments;
    }

    var sortedWord = this.word.toLowerCase().split('').sort().join('');

    var anagramWords = [];

    for (var i = 0; i < words.length; i++){

        if (sortedWord === words[i].toLowerCase().split('').sort().join('')) {

            if (this.word.toLowerCase() !== words[i].toLowerCase()){
                anagramWords.push(words[i]);
            }
            
        }
    }

    return anagramWords;
};

module.exports = Anagram;