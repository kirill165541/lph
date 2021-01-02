var slideNow = 1;
var slideCount = $('.items').children().length;
var translateWidth = 0;
var navBtnId = 0;
var slideInterval = 3000;

function nextSlide() {
	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
		$('#items-sliders').css({'transform': 'translate(0, 0)',
            '-webkit-transform': 'translate(0, 0)',
            '-ms-transform': 'translate(0, 0)',});
		slideNow = 1;
	}
	else {
		translateWidth = -$('.scroller').width()*(slideNow) - 5;
		$('#items-sliders').css({'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',});
		slideNow++;
	}
}

function prevSlide() {
	if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
		translateWidth = - $('.scroller').width()*(slideCount-1)-5;
		$('#items-sliders').css({'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',});
		slideNow = slideCount;
	}
	else {
		translateWidth = - $('.scroller').width()*(slideNow-2)-3;
		$('#items-sliders').css({'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',});
		slideNow--;
	}
}

$(document).ready(function() {

	var switchInterval = setInterval(nextSlide, slideInterval);

    $('.scroller').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });


	$('#next-slide').click(function() {

		nextSlide();

	});

	$('#prev-slide').click(function() {

		prevSlide();

	});

	$('.slide-nav-btn').click(function(){
		navBtnId = $(this).index();
		if (navBtnId+1 == 1) {
			$('#items-sliders').css({'transform': 'translate(0, 0)',
            '-webkit-transform': 'translate(0, 0)',
            '-ms-transform': 'translate(0, 0)',});
            slideNow = navBtnId + 1;
		} else {
			translateWidth = -$('.scroller').width()*(navBtnId) - 5;
			$('#items-sliders').css({'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',});
            slideNow = navBtnId + 1;
		}
	});

});