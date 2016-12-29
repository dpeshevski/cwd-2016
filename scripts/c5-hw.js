var students = [
	{firstname: 'Pero', lastname: 'Perovski', average: 9, email: 'pero@perovski.com'},
	{firstname: 'Janko', lastname: 'Jankovski', average: 8.3, email: 'janko@jankovski.com'},
	{firstname: 'Stanko', lastname: 'Stankovski', average: 6.8, email: 'stanko@stankovski.com'}
];

var table = document.querySelector('table#data-table');
var addBtn = document.querySelector('button#addBtn');
var inputFirstname = document.querySelector('input#firstname');
var inputLastname = document.querySelector('input#lastname');
var inputEmail = document.querySelector('input#email');
var inputAverage = document.querySelector('input#average');

function renderTable(){
	table.innerHTML = '';

	for(let i = 0; i < students.length; i++){
		var tr = document.createElement('tr');
		tr.id = students[i].email;

		var td1 = document.createElement('td');
		var td2 = document.createElement('td');
		var td3 = document.createElement('td');
		var td4 = document.createElement('td');
		var td5 = document.createElement('td');
		var deleteBtn = document.createElement('button');

		td1.innerText = students[i].firstname;
		td2.innerText = students[i].lastname;
		td3.innerText = students[i].average;
		td4.innerText = students[i].email;
		
		deleteBtn.addEventListener('click', function(){
			console.log(this);
			removeElement(this.dataset.email);
		});

		deleteBtn.dataset.email = students[i].email;
		deleteBtn.innerText = ' Delete ';
		td5.appendChild(deleteBtn);

		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);
		tr.appendChild(td4);
		tr.appendChild(td5);

		table.appendChild(tr);
	}
}

function removeElement(elementId){
	let index = null;

	for(let i = 0; i < students.length; i++){
		if(elementId == students[i].email){
			index = i;
		}
	}

	students.splice(index, 1);
	renderTable();
}

addBtn.addEventListener('click', function(){

	var err = 0;

	if(inputFirstname.value.length == 0){err++};
	if(inputLastname.value.length == 0){err++};
	if(inputEmail.value.length == 0){err++};
	if(inputAverage.value.length == 0){err++};

	if(err == 0){
		var student = {};

		student.firstname = inputFirstname.value;
		student.lastname = inputLastname.value;
		student.email = inputEmail.value;
		student.average = inputAverage.value;

		students.push(student);

		inputFirstname.value = '';
		inputLastname.value = '';
		inputEmail.value = '';
		inputAverage.value = '';
		
		renderTable();
	} else {
		alert('All fields need to be populated!');
	}
});

renderTable();

