const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){
    //arrange
    // let redPaint;
    // beforeEach(function(){
    //     redPaint = new Paint(5)
    // });

    it("should be empty", function(){
        //arrange
        redPaint = new Paint(0)
        //act
        litres = redPaint.num_litres
        //assert
        assert.strictEqual(litres, 0)
    });

    it("should have some paint", function(){
        //arrange
        redPaint = new Paint()
    });







});