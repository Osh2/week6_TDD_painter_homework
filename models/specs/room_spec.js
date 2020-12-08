const assert = require('assert');
const Room = require('../room.js');

describe("Room", function(){
    it("should have an area", function(){
        //arrange
        livingRoom = new Room(35, false);
        //act
        area = livingRoom.area;
        //assert
        assert.strictEqual(area, 35);
    });
    
    it("should start not painted", function(){
        //arrange
        diningRoom = new Room(50, false);
        //act
        isPainted = diningRoom.isPainted;
        //assert
        assert.strictEqual(isPainted, false)
    });

    it("should be able to be painted", function(){
        //arrange
        kitchen = new Room(25, false);
        //act
        kitchen.getPainted();
        isPainted = kitchen.isPainted
        //assert
        assert.strictEqual(isPainted, true)
    });

});