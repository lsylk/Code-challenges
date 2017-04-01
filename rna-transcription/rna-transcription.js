// Given a DNA strand, its transcribed RNA strand is formed by replacing
// each nucleotide with its complement:

// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`


var DnaTranscriber = function () {};

DnaTranscriber.prototype.toRna = function(dnaStrand) {

    var transcribedDna = "";

    for (i=0; i < dnaStrand.length; i++) {

        switch(dnaStrand[i]) {
            case 'G':
                transcribedDna += 'C';
                break;

            case 'C':
                transcribedDna += 'G';
                break;

            case 'T':
                transcribedDna += 'A';
                break;

            case 'A':
                transcribedDna += 'U';
                break;

            default:
                throw new Error ('Invalid input');
        }
    }

    return transcribedDna;
};

DnaTranscriber.prototype.toRna2 = function(dnaStrand){
  var pairs = {
   'G':'C',
   'C':'G',
   'T':'A',
   'A':'U'
  };

  function convert(letter) {
    var result = pairs[letter];
    if(result === undefined) {
        throw new Error("Invalid Input");
    }
    return result;
  }
  
  return dnaStrand.split("").map(convert).join("");
};

module.exports = DnaTranscriber;




