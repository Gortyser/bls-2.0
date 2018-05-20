document.addEventListener('DOMContentLoaded', function() {
	changeImages();
});

window.addEventListener('resize', function() {
	changeImages();
});

function changeImages() {
	var imgs = document.querySelectorAll('[data-source]');
	if (window.innerWidth <= 1920) {
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].src = imgs[i].dataset.source;
		}
	} else {
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].src = imgs[i].dataset.bigsrc;
		}
	}	
}