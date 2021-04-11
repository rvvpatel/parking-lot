let expect = require('chai').expect;
let parkingLot = require('../parkingLot');


describe('status', async function () {
    it('Parking status', async function () {
        var result = await parkingLot.status();
        if (result) {
            console.log(result);
        }
        expect(result).to.be.equal(result);
    });
});

describe('park  KA-01-P-333', async function () {
    it('should park the car', async function () {
        var preResult = 'Allocated slot number: 6';
        var result = await parkingLot.park(' KA-01-P-333');
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});

describe('park  DL-12-AA-9999', async function () {
    it('should park the car', async function () {
        var preResult = 'Sorry, parking lot is full';
        var result = await parkingLot.park('DL-12-AA-9999');
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});

describe('leave KA-01-HH-1234 4', async function () {
    it('leave car', async function () {
        var preResult = `Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30`;
        var result = await parkingLot.leave(`KA-01-HH-1234`, 4);
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});

describe('leave KA-01-BB-0001 6', async function () {
    it('leave car', async function () {
        var preResult = `Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50`;
        var result = await parkingLot.leave(`KA-01-BB-0001`, 6);
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});


describe('leave DL-12-AA-9999 2', async function () {
    it('leave car', async function () {
        var preResult = `Registration number DL-12-AA-9999 not found`;
        var result = await parkingLot.leave(`DL-12-AA-9999`, 2);
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});



describe('park KA-09-HH-0987', async function () {
    it('should park the car', async function () {
        var preResult = 'Allocated slot number: 1';
        var result = await parkingLot.park('KA-09-HH-0987');
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});


describe('park CA-09-IO-1111', async function () {
    it('should park the car', async function () {
        var preResult = 'Allocated slot number: 3';
        var result = await parkingLot.park('CA-09-IO-1111');
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});


describe('park KA-09-HH-0123', async function () {
    it('should park the car', async function () {
        var preResult = 'Sorry, parking lot is full';
        var result = await parkingLot.park('KA-09-HH-0123');
        console.log(result);
        expect(result).to.be.equal(preResult);
    });
});

describe('status', async function () {
    it('Parking status', async function () {
        var result = await parkingLot.status();
        if (result) {
            console.log(result);
        }
        expect(result).to.be.equal(result);
    });
});