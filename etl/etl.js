var Etl = function () {};

Etl.prototype.transform = function (old){

    this.transformed = {};

    for (var key in old) {

        for (var index in old[key]) {

            if (this.transformed[key] === undefined) {
                this.transformed[old[key][index].toLowerCase()] = parseInt(key);
            }
        }
    }
    console.log(this.transformed);
    return this.transformed;
};

module.exports = Etl;

