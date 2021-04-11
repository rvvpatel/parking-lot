
let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('leave KA-01-HH-3141 4', async function () {
    it('leave car', async function () {
        let data = parkingLot.Cars.find((item) => item.carNo === 'KA-01-HH-3141')
        var preResult = `Registration number KA-01-HH-3141 with Slot Number ${data.slot} is free with Charge 30`;
        var result = await parkingLot.leave(`KA-01-HH-3141`, 4);
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});

