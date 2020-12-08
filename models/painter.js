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

Painter.prototype.enoughPaint = function(room){
    let totalPaint = this.totalPaintStock();
    if (totalPaint === room.area){
        return true
    } else {
        return false
    }
};

Painter.prototype.paintRoom = function(room){
    let result = this.enoughPaint(room);
    if(result === true) {
        room.getPainted();
    }
};
module.exports = Painter;