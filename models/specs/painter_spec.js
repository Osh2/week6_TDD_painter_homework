const assert = require('assert');
const Painter = require('../painter');

describe("Painter", function(){
    it("should have empty stock", function(){
        //arrange
        daveThePainter = new Painter("Dave");
        //act
        stock = daveThePainter.paintStock;
        //assert
        assert.deepStrictEqual(stock, [])
    });




});