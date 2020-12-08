const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){
    
    it("should be empty", function(){
        //arrange
        redPaint = new Paint(0)
        //act
        litres = redPaint.numLitres
        //assert
        assert.strictEqual(litres, 0)
    });

    it("should have some paint", function(){
        //arrange
        redPaint = new Paint(5)
        //act
        litres = redPaint.numLitres
        //assert
        assert.strictEqual(litres, 5)
    });

    it("should be able to empty itself", function(){
        //arrange
        redPaint = new Paint(5)
        //act
        redPaint.empty()
        litres = redPaint.numLitres
        //assert
        assert.strictEqual(litres, 0)
    });







});