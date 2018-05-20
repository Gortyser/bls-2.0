window.addEventListener('load', function() {
	if (!document.querySelector('.seabell')) {
		createSeabell();
	}
});

window.addEventListener('resize', function() {
	if (!document.querySelector('.seabell')) {
		createSeabell();
	}
});

function createSeabell() {
	var seabell = document.createElement('div'),
		nav = document.querySelector('#fp-nav');

	seabell.classList.add('seabell');
	seabell.addEventListener('click', function() {
		var audio = new Audio('files/seabell.mp3');
		audio.loop = false;
		audio.play();

		$.fn.fullpage.moveSectionDown();
	});

	if (nav) {
		nav.appendChild(seabell);
	}
}