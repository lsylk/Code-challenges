var Bob = function(){};

Bob.prototype.hey = function(message) {

    // \xC4\xCB\xCF\xD6\xDC == ÄËÏÖÜ
    // \xE4\xEB\xEF\xF6\xFC == äëïöü

    //return 'Whoa, chill out!' if Bob is being yelled at or 
    // message has some umlauts.
    if (/^[^a-z\xE4\xEB\xEF\xF6\xFC]+[A-Z][^a-z\xE4\xEB\xEF\xF6\xFC]+$/.test(message)) {
            return 'Whoa, chill out!';
    }

    // return 'Sure. if a question is asked
    if (/[\?]$/.test(message)) {
        return 'Sure.';
    }

    // return 'Fine. Be that way!' if Bob is being addressed without actually saying
    // anything
    if (message === '' || /^[\s]+/.test(message)) {
        return 'Fine. Be that way!';

    } else {
        return 'Whatever.';
    }

};

module.exports = Bob;