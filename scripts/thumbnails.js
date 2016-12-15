function thumbnails(thumb_selector, modal_selctor){
	var thumbs = document.querySelectorAll(thumb_selector);
	var modal = document.querySelector(modal_selctor);

	for(let i = 0; i < thumbs.length; i++){
		thumbs[i].addEventListener('click', function(){
			modal.querySelector('img').src = this.src;
			
			// var img = modal.querySelector('img');
			// img.src = this.src;

			modal.style.display = 'table';
		});
	}

	modal.addEventListener('click', function(){
		modal.style.display = 'none';
	});
}