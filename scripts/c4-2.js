// var slika = document.querySelector('.thumb');
// var modal = document.querySelector('.pic-modal');

// slika.addEventListener('click', function(){
// 	modal.style.display = 'table';
// });

// modal.addEventListener('click', function(){
// 	modal.style.display = 'none';
// });

// console.log(thumbs);

// for(let i = 0; i < 100; i++){
// 	console.log(i);
// 	console.log('Zdravo Svetu!');
// }

// for(let i = 100; i > 0; i = i - 3){
// 	if(i % 2 == 0){
// 		console.log(i);
// 	}
// }


// var a = 5;




thumbnails('.thumb', '.pic-modal');

document.querySelector('.btn2').addEventListener('click', function(){
	window.location = 'http://google.com';
})


window.addEventListener(
	'keydown', 
	function(event){
		console.log(event.key);
	}
);