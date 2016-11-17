// var ime = 'Bojan'; // string
// var vozrast = 34; // number (integer)
// var visina = 182.4; // number (float)
// var vozachka_dozvola = false; // boolean

// // vozachka_dozvola - snake case
// // vozachkaDozvola - camel case

// console.log('Zdravo Svetu!');

// console.log(ime);
// console.log(vozrast);
// console.log(visina);
// console.log(vozachka_dozvola);

// console.debug('Debugging some variables...');
// console.error('My name is not ' + ime);
// console.info('This guy is this high: ' + visina + 'cm');

// console.log(ime + ' ima vozachka dozvola: ' + vozachka_dozvola);
// console.log(ime + ' ' + vozachka_dozvola + ' ' + vozrast + ' ');
// console.log(ime, vozachka_dozvola, vozrast);


// var a = 10;
// var b = 13;
// var c = 4;
// var d = 22;

// var e = a + b * c / d;
// console.log(e);

// var f = (a + b) * (c / d);
// console.log(f);


// var g = 20;
// var h = 3;

// console.log(g % h);


// function zdravo(){
// 	console.log('Zdravo Svetu');
// }

// zdravo();


// function pozdrav(ime){
// 	console.log('Zdravo ' + ime);
// }

// pozdrav('Pero');
// pozdrav('Janko');
// pozdrav('Stanko');


// T(°C) = (T(°F) - 32) / 1.8  // f2c
// T(°F) = T(°C) × 1.8 + 32  // c2f



function f2c(far){
	var output = (far - 32) / 1.8;
	console.log(output);
}

function c2f(cel){
	var output = cel * 1.8 + 32;
	console.log(output);
}

f2c(100);

c2f(38);


/*
	inches to centimeters  i2c
	centimeters to inches  c2i

	pounds to kilograms  p2k
	kilograms to pounds  k2p

	miles to kilometers  m2k
	kilometers to miles  k2m

	liters to galons  l2g
	galons to liters  g2l

	byte to megabyte  b2m
	megabyte to byte  m2b
	
*/






