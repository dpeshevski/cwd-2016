// http://openweathermap.org/img/w/[img_code].png

navigator.geolocation.getCurrentPosition(function(c){
	// console.log(c.coords.latitude);
	// console.log(c.coords.longitude);

	var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + c.coords.latitude + '&lon=' + c.coords.longitude + '&units=metric&APPID=87df752ff544d906183cc03f17b4c9fc';

	fetch(url).then(function(result){

		result.json().then(function(r){

			// console.log(r);
			// console.log(r.base);
			// console.log(r.main.temp);
			// console.log(r.wind.speed);

			document.querySelector('.city').innetText = r.name;
			document.querySelector('.icon img').src = 'http://openweathermap.org/img/w/' + r.weather[0].icon + '.png';
			document.querySelector('.temp').innerText = r.main.temp + '°C';
			document.querySelector('.pressure').innerText = r.main.pressure;
			document.querySelector('.wind').innerText = r.wind.speed;
		});
	});
});
