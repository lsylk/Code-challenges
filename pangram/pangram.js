var Pangram = function(string){
    this.string = string.toLowerCase();
};

Pangram.prototype.isPangram = function(){

    var values = [];

    var totalLetters = 0;

    var alphabet = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
   };

    if (this.string !== ''){
        for (i = 0; i < this.string.length; i++){
            if (alphabet[this.string[i]] !== undefined) {
                    alphabet[this.string[i]] += 1;
                }
        }

        for (var key in alphabet) {
            values.push(alphabet[key]);
        }

        for (i = 0; i < values.length; i++) {
            if (values[i] >= 1) {
                totalLetters += 1;
            }
        }

        if (totalLetters === 26) {
            return true;

        } else {
            return false;
        }
        
    } else {
        return false;
    }

};

module.exports = Pangram;