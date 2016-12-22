var a = document.querySelector('#a');
var b = document.querySelector('#b');
var op = document.querySelector('#op');
var res = document.querySelector('#res');

function calc(){
	switch(op.value){
		case '+':
			res.innerText = parseInt(a.value) + parseInt(b.value);
		break;
		case '-':
			res.innerText = parseInt(a.value) - parseInt(b.value);
		break;
		case '*':
			res.innerText = parseInt(a.value) * parseInt(b.value);
		break;
		case '/':
			res.innerText = parseInt(a.value) / parseInt(b.value);
		break;
		case '%':
			res.innerText = parseInt(a.value) % parseInt(b.value);
		break;
	}
}

a.addEventListener('keyup', calc);
b.addEventListener('keyup', calc);
a.addEventListener('change', calc);
b.addEventListener('change', calc);
op.addEventListener('change', calc);