const assert = require('assert');
const Painter = require('../painter');
const Paint = require('../paint');

describe("Painter", function(){
    it("should have empty stock", function(){
        //arrange
        daveThePainter = new Painter("Dave");
        //act
        stock = daveThePainter.paintStock;
        //assert
        assert.deepStrictEqual(stock, [])
    });

    it("should be able to add stock", function(){
        //arrange
        bluePaint = new Paint(10);
        leonThePainter = new Painter("Leon");
        //act
        leonThePainter.addPaint(bluePaint);
        stock = leonThePainter.paintStock;
        //assert
        assert.deepStrictEqual(stock, [bluePaint])
        

    });



});