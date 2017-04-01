var Hamming = function () {};

Hamming.prototype.compute = function(strand1, strand2) {

    if (strand1.length === strand2.length) {

        var totalDistance = 0;

        for (i = 0; i < strand1.length; i++) {
                if (strand1[i] !== strand2[i]){
                    totalDistance += 1;
                }
        }

        return totalDistance;

    } else {

        throw new Error("DNA strands must be of equal length.");
    }
};

module.exports = Hamming;