const assert = require('assert');
const Painter = require('../painter');
const Paint = require('../paint');

describe("Painter", function(){
    //arrange
    let leonThePainter;
    let redPaint;
    let bluePaint;

    beforeEach(function(){
        leonThePainter = new Painter("Leon");
        redPaint = new Paint(5);
        bluePaint = new Paint(10);
    });

    it("should have empty stock", function(){
        //act
        stock = leonThePainter.paintStock;
        //assert
        assert.deepStrictEqual(stock, [])
    });

    it("should be able to add stock", function(){
        //act
        leonThePainter.addPaint(bluePaint);
        stock = leonThePainter.paintStock;
        //assert
        assert.deepStrictEqual(stock, [bluePaint])
    });
    
    it("should calculate paint stock", function(){
        //act
        leonThePainter.addPaint(redPaint);
        leonThePainter.addPaint(bluePaint);
        totalLitres = leonThePainter.totalPaintStock();
        //assert
        assert.strictEqual(totalLitres, 15)

    });



});