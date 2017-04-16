var SpaceAge = function(seconds){
    this.seconds = seconds;
};

var onPlanetGen = function(orbitalPeriod){

    return function(){ //anonymous function is a closure.
        return parseFloat((this.seconds / 31557600 / orbitalPeriod).toFixed(2));
    };
};

SpaceAge.prototype.onEarth = onPlanetGen(1);
    // Earth: orbital period 365.25 Earth days, or 31557600 seconds

SpaceAge.prototype.onMercury = onPlanetGen(0.2408467);
    // Mercury: orbital period 0.2408467 Earth years

SpaceAge.prototype.onVenus = onPlanetGen(0.61519726);

SpaceAge.prototype.onMars = onPlanetGen(1.8808158);
    // Mars: orbital period 1.8808158 Earth years

SpaceAge.prototype.onJupiter = onPlanetGen(11.862615);
    // Jupiter: orbital period 11.862615 Earth years


SpaceAge.prototype.onSaturn = onPlanetGen(29.447498);
    // Saturn: orbital period 29.447498 Earth years


SpaceAge.prototype.onUranus = onPlanetGen(84.016846);
    // Uranus: orbital period 84.016846 Earth years


SpaceAge.prototype.onNeptune = onPlanetGen(164.79132);
    // Neptune: orbital period 164.79132 Earth years


//=========================== Solution # 2 ===========================

// SpaceAge.prototype.onEarth = function (){

//     // Earth: orbital period 365.25 Earth days, or 31557600 seconds
//     return parseFloat((this.seconds / 31557600).toFixed(2));
// };

// SpaceAge.prototype.onVenus = function (){

//    // Venus: orbital period 0.61519726 Earth years
//     return parseFloat((this.seconds / 31557600 / 0.61519726).toFixed(2));
// };

// // And the same can be written for the other plannets compared to onVenus() method. 


   
module.exports = SpaceAge;


