$(window).load(function() {

var offset;

$.stellar.positionProperty.limit = {

  setTop: function($element, newTop, originalTop) {
    if ($element.context.classList.contains('bottles-img')) {
    	offset = parseInt($('body').css('font-size')) * 5;
    	if (newTop < originalTop - offset) {
	      // Call default position property with our limited value
	      $.stellar.positionProperty.position.setTop.call(null, $element, originalTop - offset, originalTop - offset);

	    } else {

	      // Otherwise, delegate to the 'setTop' method of the 'position' adapter
	      $.stellar.positionProperty.position.setTop.apply(null, arguments);

	    }
    } else {

	    if (newTop < originalTop) {
	      // Call default position property with our limited value
	      $.stellar.positionProperty.position.setTop.call(null, $element, originalTop, originalTop);

	    } else {

	      // Otherwise, delegate to the 'setTop' method of the 'position' adapter
	      $.stellar.positionProperty.position.setTop.apply(null, arguments);

	    }
	}
  },

  // Nothing custom needed here, so we'll just use the built in adapter:
  setLeft: $.stellar.positionProperty.position.setLeft

}

recalcOffset();

$(window).resize(function(event) {
	recalcOffset();
});

$.stellar({
	horizontalScrolling: false,
	responsive: true,
	positionProperty: 'limit'
});

function recalcOffset() {
	var imgBottles = document.querySelector('.bottles-img');
	imgBottles.dataset.stellarVerticalOffset = imgBottles.scrollHeight / 2 + 200;

	var sectionProud = document.querySelector('.section-proud-helper');
	var mainSection = document.querySelector('.section-main');

	if (window.innerWidth <= 1920 && window.innerWidth > 1750) {
		mainSection.dataset.stellarVerticalOffset = -mainSection.scrollHeight / 2;
	} else if (window.innerWidth < 1750 && window.innerWidth > 1600) {
		mainSection.dataset.stellarVerticalOffset = -mainSection.scrollHeight / 2 + 100;
	} else if (window.innerWidth < 1600) {
		mainSection.dataset.stellarVerticalOffset = 0;
	}

	if (window.innerWidth > 1920) {
		sectionProud.dataset.stellarVerticalOffset = - (imgBottles.scrollHeight / 2 * 3 - 100);
	} else if (window.innerWidth <= 1920 && window.innerWidth >= 1440) {
		sectionProud.dataset.stellarVerticalOffset = - (imgBottles.scrollHeight / 2 * 3 + 100);
	} else {
		sectionProud.dataset.stellarVerticalOffset = 0;
	}
	if (window.innerWidth / window.innerHeight < 1.5) {
		sectionProud.dataset.stellarVerticalOffset = '0';
	}

}
});