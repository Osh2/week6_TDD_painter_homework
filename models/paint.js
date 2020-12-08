const Paint = function(numLitres){
    this.numLitres = numLitres;
};
Paint.prototype.empty = function (){
    this.numLitres = 0
};


module.exports = Paint;