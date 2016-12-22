var tekst = document.querySelector('.tekst');
var res = document.querySelector('#res');

tekst.addEventListener('keyup', function(){
	if(this.value.length > 0){
		var reversed = '';

		for(let i = this.value.length - 1; i >= 0; i--){
			reversed += this.value[i];
		}

		if(reversed == this.value){
			res.innerText = 'Palindrome!';
		} else {
			res.innerText = 'Non-palindrome...';
		}
	}
});

/*

Asynchronious
Javascript
And
XML

*/