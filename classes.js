"use strict"
//An oop example for Booking Air Ticket
//Create parent class AirTicket
class AirTicket{												
	constructor (nameofperson, flightno, seatno, flightcategory, flightdate, destination, status){    //Create Constructor
		this.nameofperson = nameofperson;    		//Name of Person that booked the flight
		this.flightno = flightno;					//Flight No
		this.seatno = seatno;						//Seat No
		this.flightcategory = flightcategory;		//Flight category
		this.flightdate = flightdate;
		this.destination = destination;
		this.status = status;
	}

	toString(){
		if(this.status === 'Booked'){
			return ` ${this.nameofperson} || ${this.flightno} ||  ${this.seatno} || ${this.flightcategory}|| ${this.flightdate}|| ${this.destination}|| Booked `;
		}
		else if(this.status === 'In Progress'){
			return `${this.nameofperson} || ${this.flightcategory}|| ${this.flightdate}|| ${this.destination}|| In Progress`
		}
		else
			return 'Invalid Status, Please Enter Booked or In Progress';
 
	}

	printTicketInfo(){
		console.log(this.toString());
	}
}


//Creating object for parent class AirTicket
const ticket = new AirTicket('Oshibote', '15-57B', 'window corner', 'International', '24-07-2016', 'London', 'Booked');
ticket.printTicketInfo();


//Subclass Request Ticket


"use strict"

class RequestTicket extends AirTicket{
	constructor (nameofperson, flightcategory, flightdate, destination, status) {
		super(nameofperson, 0, 'Not yet', flightcategory, flightdate, destination, status);
	}

	printTicketInfo (){
		
		console.log("Your Have Successfully Booked Your ticket");
		console.log('Your ticket Info is:');
		super.printTicketInfo();
	}
}



//Creating object for sub class RequestedTicket
const reqtick = new RequestTicket('Oshibote', 'International', '24-07-2018', 'London', 'In Progress');
reqtick.printTicketInfo();



//Subclass COnfirm Ticket

"use strict"

class ConfirmedTicket extends AirTicket{
	constructor (nameofperson, flightno, seatno, flightcategory, flightdate, destination, status) {
		super(nameofperson, flightno, seatno, flightcategory, flightdate, destination, status);
	}

	// toString(){
	// 	return `||${this.status}`;
	//  }

	printTicketInfo (){
		
		console.log('Your Ticket Info Is: ');
		super.printTicketInfo();
	}
}

//Creating object for sub class ConfirmedTicket

const confimticket = new ConfirmedTicket('Oshibote', '5A-55', '5' ,'International', '24-07-2018', 'London', 'Booked');
confimticket.printTicketInfo();