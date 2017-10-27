$(document).ready(function() {
	$('.a_tip li').hover(function() {
		$(this).find('ol').stop(true).show('1000');
	}, function() {
		$(this).find('ol').stop(true).hide('1000');
	})
	$('body').click(function(e) {
		if(e.target.className == 'fr a_search_box' || e.target.className == 'a_icon' || e.target.className == 'a_img') {
			console.log(222);
			$('.a_search').find('.a_search_box').css('width', '240px');
			$('.a_search').find('ul').show('1000');
		} else {
			$('.a_search').find('.a_search_box').css('width', '186px');
			$('.a_search').find('ul').hide('1000');
		}
	})
	$('.a_user li').eq(2).hover(function() {
		$(this).find('ul').show('1000');
	}, function() {
		$(this).find('ul').hide('1000');
	})
})

$(window).scroll(function() {
	if($(document).scrollTop() > 60) {
		$('.a_fix').show();
	} else if($(document).scrollTop() <= 60) {
		$('.a_fix').hide();
	}
})