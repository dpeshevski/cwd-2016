var div1 = document.createElement('div');

div1.innerText = 'Zdravo Svetu!';

div1.style.color = '#ffffff';
div1.style.backgroundColor = 'red';
div1.style.height = '200px';

console.log(div1);

var body = document.querySelector('body');

body.appendChild(div1);

var gradovi = ['Skopje', 'Ohrid', 'Kumanovo', 'Tetovo'];

gradovi = gradovi.reverse();

var ul = document.createElement('ul');

for(let i = 0; i < gradovi.length; i++){
	var li = document.createElement('li');
	li.innerText = gradovi[i];
	ul.appendChild(li);
}

body.appendChild(ul);

var studenti = [
	{ime: 'Pero', prezime: 'Perovski', prosek: 7, br_index: 1000},
	{ime: 'Janko', prezime: 'Jankovski', prosek: 9, br_index: 1001},
	{ime: 'Stanko', prezime: 'Stankovski', prosek: 6.5, br_index: 1002},
	{ime: 'Petko', prezime: 'Petkovski', prosek: 9.5, br_index: 1003, horoskop: 'frizhider'},
	{ime: 'Goran', prezime: 'Goranovski', prosek: 10, br_index: 1004},
];

var table = document.createElement('table');
table.border = 1;

// for(let i = 0; i < studenti.length; i++){
// 	var tr = document.createElement('tr');

// 	var td1 = document.createElement('td');
// 	td1.innerText = studenti[i].ime;
// 	tr.appendChild(td1);

// 	var td2 = document.createElement('td');
// 	td2.innerText = studenti[i].prezime;
// 	tr.appendChild(td2);

// 	var td3 = document.createElement('td');
// 	td3.innerText = studenti[i].prosek;
// 	tr.appendChild(td3);

// 	table.appendChild(tr);
// }

// body.appendChild(table);


var columns = [];
var trh = document.createElement('tr');

for(let i in studenti[0]){
	columns.push(i);
	var th = document.createElement('th');
	th.innerText = i;
	trh.appendChild(th);
}

table.appendChild(trh);


for(let i = 0; i < studenti.length; i++){
	var tr = document.createElement('tr');

	for(let j in columns){
		var td = document.createElement('td');
		td.innerText = studenti[i][columns[j]];
		tr.appendChild(td);
	}

	table.appendChild(tr);
}


body.appendChild(table);




// var studenti = {
// 	structure: ['ime', 'prezime', 'prosek', 'br_index'],
// 	data: [
// 		{ime: 'Pero', prezime: 'Perovski', prosek: 7, br_index: 1000},
// 		{ime: 'Janko', prezime: 'Jankovski', prosek: 9, br_index: 1001},
// 		{ime: 'Stanko', prezime: 'Stankovski', prosek: 6.5, br_index: 1002},
// 		{ime: 'Petko', prezime: 'Petkovski', prosek: 9.5, br_index: 1003, horoskop: 'frizhider'},
// 		{ime: 'Goran', prezime: 'Goranovski', prosek: 10, br_index: 1004},
// 	]
// };