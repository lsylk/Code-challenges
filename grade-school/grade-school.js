var School = function() {
    this.SchoolRoster = {};
};

School.prototype.roster = function() {
    return this.SchoolRoster;
};

School.prototype.add = function(name, grade) {

    if (this.SchoolRoster[grade] === undefined){
        this.SchoolRoster[grade] = [name];
    } else {
        this.SchoolRoster[grade].push(name);
        this.SchoolRoster[grade].sort();
    }
    
    return this.SchoolRoster;

};

School.prototype.grade = function(grade) {

    if (this.SchoolRoster[grade] !== undefined) {
        return this.SchoolRoster[grade].sort();
    }
        
    return [];

};



module.exports = School;
