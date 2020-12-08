const Painter = function(name) {
    this.name = name;
    this.paintStock = [];
};

Painter.prototype.addPaint = function(newPaint){
    this.paintStock.push(newPaint);
};

module.exports = Painter;