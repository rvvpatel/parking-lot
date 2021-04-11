const { stdin, stdout } = require('process');
var readline = require('readline');
var parkingLot = require('./parkingLot')
const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

let appInit = () => {
    rl.on('line', (input) => {
        input = input.split(" ");
        switch (input[0]) {
            case ('create_parking_lot'):
                try {
                    const result = parkingLot.createParkingLot(input[1]);
                    console.log(result)
                } catch (e) {
                    console.log(`error ${e}`)
                }
                break;

            case ('park'):
                try {
                    const result = parkingLot.park(input[1]);
                    console.log(result)
                } catch (e) {
                    console.log(`error ${e}`)
                }
                break;
            case ('leave'):
                try {
                    const result = parkingLot.leave(input[1], input[2]);
                    console.log(result)
                } catch (e) {
                    console.log(`error ${e}`)
                }
                break;
            case ('status'):
                try {
                    const result = parkingLot.status();
                    if (result) {
                        console.log(result)
                    }
                } catch (e) {
                    console.log(`error ${e}`)
                }
                break;
        }
    });
}
appInit()