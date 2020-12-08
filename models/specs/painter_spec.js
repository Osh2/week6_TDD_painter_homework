const assert = require('assert');
const Painter = require('../painter');
const Paint = require('../paint');
const Room = require('../room');

describe("Painter", function(){
    //arrange
    let leonThePainter;
    let redPaint;
    let bluePaint;
    let bathroom;

    beforeEach(function(){
        leonThePainter = new Painter("Leon");
        redPaint = new Paint(5);
        bluePaint = new Paint(10);
        bathroom = new Room(25, false)
    });

    it("should have empty stock", function(){
        //act
        const stock = leonThePainter.paintStock;
        //assert
        assert.deepStrictEqual(stock, [])
    });

    it("should be able to add stock", function(){
        //act
        leonThePainter.addPaint(bluePaint);
        const stock = leonThePainter.paintStock;
        //assert
        assert.deepStrictEqual(stock, [bluePaint])
    });
    
    it("should calculate paint stock", function(){
        //act
        leonThePainter.addPaint(redPaint);
        leonThePainter.addPaint(bluePaint);
        const totalLitres = leonThePainter.totalPaintStock();
        //assert
        assert.strictEqual(totalLitres, 15)
    });

    it("should calculate if has enough paint for room (false)", function(){
        //act
        leonThePainter.addPaint(redPaint);
        leonThePainter.addPaint(bluePaint);
        const result = leonThePainter.enoughPaint(bathroom)
        //assert
        assert.strictEqual(result, false)
    });

    it("should calculate if has enough paint for room (true)", function(){
        //assert
        const tartanPaint = new Paint(10)
        //act
        leonThePainter.addPaint(redPaint);
        leonThePainter.addPaint(bluePaint);
        leonThePainter.addPaint(tartanPaint);
        const result = leonThePainter.enoughPaint(bathroom);
        //assert
        assert.strictEqual(result, true)
    });
});