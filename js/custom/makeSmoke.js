window.addEventListener('load', function() {
	makeSmoke();
});
window.addEventListener('resize', function() {
	makeSmoke();
})

function makeSmoke() {
	var canvas1 = document.getElementById('canvas');
	var ctx1 = canvas1.getContext('2d');
	var contactsBg = document.querySelector('.contacts-bottles');

	canvas1.width = document.querySelector('.section-contacts').scrollWidth;
	canvas1.height = document.querySelector('.section-contacts').scrollHeight;

	var smokeLifetime = Math.floor(Math.random() * 200) + 7800;

	var party1 = smokemachine(ctx1, [255, 255, 255])
	party1.start() // start animating

	setInterval(function(){
		party1.addsmoke(contactsBg.offsetLeft + contactsBg.scrollWidth/1.5, contactsBg.offsetTop + contactsBg.scrollHeight/1.5, .1, smokeLifetime)
	},100)
}