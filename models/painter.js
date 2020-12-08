const Painter = function(name) {
    this.name = name;
    this.paintStock = [];
};

Painter.prototype.addPaint = function(newPaint){
    this.paintStock.push(newPaint);
};

Painter.prototype.totalPaintStock = function(){
    let totalPaint = 0
    for (let paint of this.paintStock) {
        let paintAmount = paint.numLitres;
        totalPaint += paintAmount;
    } 
    return totalPaint;
};


module.exports = Painter;