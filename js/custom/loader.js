var loader = document.querySelector('.loader');

window.addEventListener('load', function() {
	/*document.body.style.overflowY = 'auto';*/
	loader.classList.add('loader-hidden');
	setTimeout(function() {
		loader.style.display = 'none';
		loader.style.height = '0';
	}, 1000);
	if (Cookies.get('isAgeVerificated')) {
		document.querySelector('.age-verification').style.display = 'none';
		document.querySelector('.age-verification').style.height = '0';
	} else {
		ageVerification();
	}
});