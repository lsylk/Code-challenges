var Triangle = function (side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
};

Triangle.prototype.kind = function (){

    triangleSides = [this.side1, this.side2, this.side3].sort(
        function (x,y){
            return x - y;
        });

    if (triangleSides[2] > triangleSides[1] + triangleSides[0] || triangleSides[0] <= 0) {
        throw new Error ('Triangle violating triangle inequality');
    }

    if (this.side1 === this.side2 && this.side2 === this.side3){
        return 'equilateral';

    } else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3){
        return 'isosceles';

    } else {
        return 'scalene';
    }
};

module.exports = Triangle;
