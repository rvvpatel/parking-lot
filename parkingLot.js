let Cars = [];
let maxSize = 0;
let availableSlot = [];

let createParkingLot = (lotNo) => {
    try {
        maxSize = parseInt(lotNo);
    } catch (e) {
        return "Please enter number";
    }

    for (let i = 1; i <= maxSize; i++) {
        availableSlot.push(i)
    }
    return `Created a parking lot with ${availableSlot.length} slots`
}

let park = (carNo) => {
    if (maxSize === 0) {
        return 'parkinglot is not created'
    }
    else if (maxSize === Cars.length) {
        return 'Sorry, parking lot is full'
    }
    else {
        let slot = availableSlot[0];
        Cars.push({
            'slot': slot,
            'carNo': carNo
        })
        availableSlot.shift();
        return `Allocated slot number: ${slot}`
    }
}

let hourCalculated = (hours) => {
    if (parseInt(hours) > 0) {
        let charge = 10;
        if (parseInt(hours) - 2 > 0) {
            charge = charge + (parseInt(hours) - 2) * 10
        }
        return charge;
    }
    else {
        return "0 charge"
    }
}

let leave = (carNo, hours) => {
    if (maxSize === 0) {
        return "parking lot is not initiated";
    }
    else if (Cars.length > 0) {
        let data = Cars.find((item) => item.carNo === carNo)
        if (data) {
            Cars = Cars.filter(x => {
                return x.carNo != carNo;
            })
            // add empty slot after leave car
            availableSlot.push(data.slot);
            availableSlot.sort();
            return `Registration number ${data.carNo} with Slot Number ${data.slot} is free with Charge ${hourCalculated(hours)}`
        } else {
            return `Registration number ${carNo} not found`
        }
    }
    else {
        return 'Parking lot empty'
    }
}

let status = () => {
    if (maxSize === 0) {
        return "parking lot is not initiated";
    } else if (Cars.length > 0) {
        Cars.sort((a, b) => (a.slot) - (b.slot));
        console.log("Slot No.\tCar No.")
        Cars.map(item => {
            console.log(item.slot + '\t    ' + item.carNo)
        })
    }
    else {
        return 'Parking lot empty'
    }
}

module.exports = {
    createParkingLot,
    park,
    leave,
    status,
    Cars
}