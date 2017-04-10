

function FoodChain() {}

FoodChain.prototype.verse =  function(n) {
    var animals = [
        "fly",
        "spider",
        "bird",
        "cat",
        "dog",
        "goat",
        "cow",
        "horse"
    ]

    var extras = [
        "It wriggled and jiggled and tickled inside her.\n",
        "How absurd to swallow a bird!\n",
        "Imagine that, to swallow a cat!\n",
        "What a hog, to swallow a dog!\n",
        "Just opened her throat and swallowed a goat!\n",
        "I don't know how she swallowed a cow!\n"
    ]

    var result = `I know an old lady who swallowed a ${animals[n-1]}.\n`;
    if(n > 1 && n < 8) {
        result += extras[n-2];
        for(var i = n; i >= 2; i--) {
            let spiderExtra = i-2 == 1 ? ' that wriggled and jiggled and tickled inside her' : "";
            result += `She swallowed the ${animals[i-1]} to catch the ${animals[i-2]}${spiderExtra}.\n`
        }
    }

    if (n === 8) {
        result += `She's dead, of course!\n`
    } else {
        result += "I don't know why she swallowed the fly. Perhaps she'll die.\n"
    }

    return result;
};

FoodChain.prototype.verses =  function(start, stop) {

    // var result = "";

    // for (var i = start; i <= stop; i++) {
    //     result += this.verse(i) + '\n';
    // }

    // return result;

    // ===================== Recursion ======================

    return start <= stop ? this.verse(start) + '\n' + this.verses(start + 1, stop) : '';

};

module.exports = FoodChain;
