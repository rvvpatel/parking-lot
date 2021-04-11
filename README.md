#How to use app

Install all dependencies with testing dependent packages
"npm install"

Run the main program
"node app.js"

Run all tests cases
"npm test testCases/run.testcase.js"


Problem Statement:
-----------------------
I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is 
given a number starting at 1 increasing with increasing distance from the entry point 
in steps of one. I want to create an automated ticketing system that allows my 
customers to use my parking lot without human intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver. The 
ticket issuing process includes us documenting the registration number (number 
plate) and the colour of the car and allocating an available parking slot to the car 
before actually handing over a ticket to the driver (we assume that our customers are 
nice enough to always park in the slots allocated to them). The customer should be 
allocated a parking slot which is nearest to the entry. At the exit the customer returns 
the ticket with the time the car was parked in the lot, which then marks the slot they 
were using as being available. Total parking charge should be calculated as per the 
parking time. Charge applicable is $10 for first 2 hours and $10 for every additional 
hour. <br />

● Registration numbers of all cars. <br />
● Slot number in which a car with a given registration number is parked. <br />
● Slot numbers of all slots where a car is parked.<br />


Inputs:
----------------------
create_parking_lot 6 <br />

create_parking_lot 6 <br />
park KA-01-HH-1234 <br />
park KA-01-HH-9999 <br />
park KA-01-BB-0001 <br />
park KA-01-HH-7777 <br />
park KA-01-HH-2701 <br />
park KA-01-HH-3141 <br />
leave KA-01-HH-3141 4 <br />
status <br />
park KA-01-P-333 <br />
park DL-12-AA-9999 <br />
leave KA-01-HH-1234 4 <br />
leave KA-01-BB-0001 6 <br />
leave DL-12-AA-9999 2 <br />
park KA-09-HH-0987 <br />
park CA-09-IO-1111 <br />
park KA-09-HH-0123 <br />
status <br />

Outputs: 
------------------
Created parking lot with 6 slots <br />
Allocated slot number: 1 <br />
Allocated slot number: 2 <br />
Allocated slot number: 3 <br />
Allocated slot number: 4 <br />
Allocated slot number: 5 <br />
Allocated slot number: 6Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30 <br />
Slot No. Registration No. <br />
1 KA-01-HH-1234 <br />
2 KA-01-HH-9999 <br />
3 KA-01-BB-0001 <br />
4 KA-01-HH-7777 <br />
5 KA-01-HH-2701 <br />
Allocated slot number: 6 <br />
Sorry, parking lot is full <br />
Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30 <br />
Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50 <br />
Registration number DL-12-AA-9999 not found <br />
Allocated slot number: 1 <br />
Allocated slot number: 3 <br />
Sorry, parking lot is full <br />
Slot No. Registration No. <br />
1 KA-09-HH-0987 <br />
2 KA-01-HH-9999 <br />
3 CA-09-IO-1111 <br />
4 KA-01-HH-7777 <br />
5 KA-01-HH-2701 <br />
6 KA-01-P-333 <br />


Thank You!
----------
