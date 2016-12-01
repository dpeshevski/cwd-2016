function cigari(br, cena, avtomobil){
	switch(avtomobil){
		case 'dacia':
			return (11000 * 61.5) / (br * 365 / 19 * cena);
		break;
		case 'skoda':
			return (14000 * 61.5) / (br * 365 / 19 * cena);
		break;
		case 'vw':
			return (20000 * 61.5) / (br * 365 / 19 * cena);
		break;
		case 'audi':
			return (30000 * 61.5) / (br * 365 / 19 * cena);
		break;
		case 'bmw':
			return (50000 * 61.5) / (br * 365 / 19 * cena);
		break;
	}
}

// var broj_na_cigari = 38;
// var kutija_cena = 140;

// console.log('dacia: ' + cigari(broj_na_cigari, kutija_cena, 'dacia'));
// console.log('skoda: ' + cigari(broj_na_cigari, kutija_cena, 'skoda'));
// console.log('vw: ' + cigari(broj_na_cigari, kutija_cena, 'vw'));
// console.log('audi: ' + cigari(broj_na_cigari, kutija_cena, 'audi'));
// console.log('bmw: ' + cigari(broj_na_cigari, kutija_cena, 'bmw'));

var parni_broevi = [2, 4, 6, 8, 10];
console.log(parni_broevi);
console.log(parni_broevi[4]);
console.log(parni_broevi.length);

var iminja = ['Bojan', 'Janko', 'Petko', 'Stanko'];
console.log(iminja);
console.log(iminja[3]);
console.log(iminja.length);

var nizi = [
	['Pero', 'Janko', 'Stanko'],
	[123, 543, 563],
	[true, false, true],
	[1.85, 2.32, 1.11]
];

console.log(nizi);
console.log(nizi[0][2]);
console.log(nizi.length);


var n = [];
n[10] = 'Skopje';
n[20] = 'Veles';
n[22] = 'Ohrid';

console.log(n);
console.log(n.length);

var student = [];
student['ime'] = 'Pero';
student['prezime'] = 'Perovski';

console.log(student);
console.log(student.length);

console.log(student['ime']);
console.log(student.ime);

var profesor = {
	ime: 'Janko',
	prezime: 'Jankovski',
	predmet: 'Astro Fizika'
};

console.log(profesor);
console.log(profesor.ime);
console.log(profesor['ime']);


var test = [
	{ime: 'Pero Perovski', ocena: 5},
	{ime: 'Janko Jankovski', ocena: 4},
	{ime: 'Stanko Stankovski', ocena: 2},
	{ime: 'Goran Goranovski', ocena: 3},
	{ime: 'Ivan Ivanovski', ocena: 1}
];

// Stanko Stankovski
// 4
// Ivan Ivanovski
// 1
// Pero Perovski ima ocena 5


var pozdrav = function(){
	console.log('Zdravo Svetu!');
}

pozdrav();

// function pozdravIme(ime){
// 	console.log('Zdravo ' + ime);
// }


var pozdravIme = function(ime){
	console.log('Zdravo ' + ime);
}

pozdravIme('Pero');


var funkcii = {
	eden: function(){
		console.log('Funkcija br 1');
	},
	dva: function(){
		console.log('Funkcija br 2');
	},
	tri: function(){
		console.log('Funkcija br 3');
	}
};

funkcii.dva();
funkcii['dva']();

var broj = 'tri';
funkcii[broj]();
// funkcii['tri']();


var ime = function(ime){
	console.log('Zdravo ' + ime);
}


var hello = function(i, fn){
	fn(i);
}


hello('Bojan', ime);



var prvaFunkcija = function(){
	console.log('prva funkcija');
}

var vtoraFunkcija = function(fn){
	console.log('vtora funkcija');
	fn();
}

prvaFunkcija();
vtoraFunkcija(prvaFunkcija);


setInterval(prvaFunkcija, 1000);

console.log('KRAJ!');





var avtomobili = {
	dacia: function(c){
		return (11000 * 61.5) / c;
	},
	skoda: function(c){
		return (14000 * 61.5) / c;
	},
	vw: function(c){
		return (20000 * 61.5) / c;
	},
	audi: function(c){
		return (30000 * 61.5) / c;
	},
	bmw: function(c){
		return (50000 * 61.5) / c;
	},
	porsche: function(c){
		return (100000 * 61.5) / c;
	}
};

function presmetka(br, cena, avt){
	var p = br * 365 / 19 * cena; // kolku pari godishno se davaat za cigari
	return avtomobili[avt](p);
}

console.log(presmetka(16, 90, 'dacia'));
console.log(presmetka(16, 90, 'porsche'));















