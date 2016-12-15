var tb1 = document.querySelector('.textbox1');
var tf1 = document.querySelector('.textfield1');
var tf2 = document.querySelector('.textfield2');
var sb1 = document.querySelector('.selectbox1');

tb1.addEventListener('keydown', function(e){
	tf1.innerText = tb1.value;
	tf2.innerHTML = tb1.value;
});

sb1.addEventListener('change', function(){
	console.log(sb1.value);
});