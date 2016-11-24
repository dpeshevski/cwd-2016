
function sobiranje(a, b){
	var result = a + b;
	return result;
}

var r = sobiranje(3, 7);

// console.log(r);


function c2f(cel){
	var output = cel * 1.8 + 32;
	return output;
}

var f = c2f(35);
// console.log(f);



var godini = 38;

if(true){
	console.log('Mlad/a si');
} else {
	console.log('Star/a si');
}

// OPERATORI ZA SPOREDBA
//  < - pomalo od
//  > - pogolemo od
//  <= - pomalo ili ednakvo
//  >= - pogolemo ili ednakvo
//  == - ednakvo
//  != - razlichno (neednakvo)
//  === - apsolutno ednakvo
//  !== - apsolutno neednakvo
//  ! - negacija

// OPERATORI ZA GRUPIRANJE NA ISKAZI
//  && - i
//  || - ili
//  () - zagradi za grupirawe

var a = 3;
var b = 27;

if(a > 4 && b < 50){
	console.log('VISTINA');
} else {
	console.log('NEVISTINA!');
}

//  и
//  true && true = true
//  true && false = false
//  false && true = false
//  false && false = false

//  или
//  true || true = true
//  true || false = true
//  false || true = true
//  false || false = false

a = 5;
b = 10;
var c = 15;
var d = 25;

if(a < 10 && (b > 14 || c > 100) || !(d == 20)){
	console.log('vistina');
} else {
	console.log('nevistina');
}

var e = 7;

if(e <= 5){
	console.log('mal broj');

} else if(e > 5 && e <= 10){
	console.log('sreden broj');

} else {
	console.log('golem broj');

}




var ovoshje = 'Lubenica';
var dolzina_ovoshje = ovoshje.length;
console.log(dolzina_ovoshje);

// ...funkcijata ...
function ubavoOvoshje(o){
	// var br = o.length;

	// if(br % 2 == 0){
	// 	return true;
	// } else {
	// 	return false;
	// }

	// return br % 2 == 0 ? true : false;

	// return br % 2 == 0;

	return o.length % 2 == 0;
}


var u = ubavoOvoshje('portokal');

if(u){
	console.log('Ovoshjeto e ubavo');
} else {
	console.log('Ovoshjeto ne e ubavo');
}

// funkcija...

function matematika(operation, a, b){
	if(operation == '+'){
		return (a + b);
	} else if(operation == '/'){
		return (a / b);
	} else if(operation == '-'){
		return (a - b);
	} else if(operation == '*'){
		return (a * b);
	}
}


var s = matematika('+', 2, 4);
console.log(s); // 6

var d = matematika('/', 6, 3);
console.log(d); // 2

var o = matematika('-', 6, 3);
console.log(o); // 3

var m = matematika('*', 6, 3);
console.log(m); // 18






var grad = 'Skopje';

switch(grad){
	case 'Veles':
		console.log('Zdravo Veleshani!');
	break;

	case 'Skopje': 
		console.log('Zdravo Skopjanischa!');
	break;

	case 'Ohrid': 
		console.log('Zdravo Origjani!');
	break;

	default: 
		console.log('Zdravo nepoznat choveku!');
	break;
}


