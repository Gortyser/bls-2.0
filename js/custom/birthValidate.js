function ageVerification() {
var ageBtn = document.querySelector('.age-btn');
var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');
var monthValue;

ageBtn.addEventListener('click', function() {
	switch (monthSelect.value) {
		case 'Январь':
			monthValue = 0;
			break;
		case 'Февраль':
			monthValue = 1;
			break;
		case 'Март':
			monthValue = 2;
			break;
		case 'Апрель':
			monthValue = 3;
			break;
		case 'Май':
			monthValue = 4;
			break;
		case 'Июнь':
			monthValue = 5;
			break;
		case 'Июль':
			monthValue = 6;
			break;
		case 'Август':
			monthValue = 7;
			break;
		case 'Сентябрь':
			monthValue = 8;
			break;
		case 'Октябрь':
			monthValue = 9;
			break;
		case 'Ноябрь':
			monthValue = 10;
			break;
		case 'Декабрь':
			monthValue = 11;
			break;
	}

	var birthDate = dateValidate(yearSelect.value, monthValue, daySelect.value);
	Cookies.set('isAgeVerificated', birthDate, { expires: 7 });

	if (birthDate) {
		document.querySelector('.age-verification').classList.add('age-hidden');
		setTimeout(function() {
			document.querySelector('.age-verification').style.display = 'none';
			document.querySelector('.age-verification').style.height = '0';
		}, 1000)
		/*document.body.style.overflowY = 'auto';*/
	} else {
		this.classList.add('active');
		setTimeout(function() {
			ageBtn.classList.remove('active');
		}, 5000);
	}
});
}

function dateValidate(year, month, day) {
	return new Date(parseInt(year) + 18, month, day) <= new Date();
}