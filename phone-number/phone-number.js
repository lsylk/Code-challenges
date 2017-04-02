var PhoneNumber = function(num){
    this.num = num;
};

PhoneNumber.prototype.number = function () {

    this.phoneNumber = '';
    for (var i = 0; i < this.num.length; i++){
        if (/[0-9]/.test(this.num[i]) === true) {
            this.phoneNumber += this.num[i];
        }
    }

    // Was not needed. 
    // if (this.phoneNumber.length < 10 | this.phoneNumber.length > 11) {
    //     return '0000000000';
    // }

    if (this.phoneNumber.length === 10) {
        return this.phoneNumber;
    }

    if (this.phoneNumber.length === 11 && this.phoneNumber[0] === '1') {
        return this.phoneNumber.slice(1);
    }

    return '0000000000';

};


PhoneNumber.prototype.areaCode = function() {
    return this.number().substring(0,3);
};

PhoneNumber.prototype.toString = function(){

    var areaCode = this.areaCode();
    var cityCode = this.number().substring(3,6);
    var homeCode = this.number().substring(6);

    // use of template strings
    return `(${areaCode}) ${cityCode}-${homeCode}`;
};


module.exports = PhoneNumber;

