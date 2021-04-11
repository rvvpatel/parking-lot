
let expect = require('chai').expect;
let parkingLot = require('../parkingLot');

describe('park KA-01-HH-1234', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 1';
    var result = await parkingLot.park('KA-01-HH-1234');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-9999', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 2';
    var result = await parkingLot.park('KA-01-HH-9999');
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

describe('park KA-01-BB-0001', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 3';
    var result = await parkingLot.park('KA-01-BB-0001');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});


describe('park KA-01-HH-7777', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 4';
    var result = await parkingLot.park('KA-01-HH-7777');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-2701', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 5';
    var result = await parkingLot.park('KA-01-HH-2701');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park KA-01-HH-3141', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 6';
    var result = await parkingLot.park('KA-01-HH-3141');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});
