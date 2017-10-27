//返回顶部


function appear() {

	var $e_fix1 = $(".e_fixed_box1");
	var $e_fix2 = $(".e_fixed_box2");
	var $e_img = $(".e_fixed_pc1 img");
	var $e_wd = $(".e_fixed_wd");
	$(function() {
		showScroll(); //显示滚动条
		function showScroll() {
			$(window).scroll(function() {
				var scrollValue = $(window).scrollTop();
				if(scrollValue > 250) {
					$e_fix1.fadeIn();
					$e_fix2.fadeIn();

				} else {
					$e_fix1.fadeOut();
					$e_fix2.fadeOut();
				}
			});
			$e_fix2.hover(function() {
				$e_img.eq(1).hide();
				$e_wd.stop(true).fadeIn(1500);
			}, function() {
				$e_img.eq(1).stop(true).fadeIn(1500);
				$e_wd.hide();
			})
			$e_fix2.click(function() {
				$(window).scrollTop(0);
			});
		}
	})

};
appear();
//
//function showScroll() {
//	$(window).scroll(function() {
//		var scrollValue = $(window).scrollTop();
//		scrollValue > 150 ? $(".c_contact").fadeIn() : $(".c_contact").fadeOut();
//	});
//	$('.to_top').click(function() {
//		$("html,body").animate({
//			scrollTop: 0
//		}, 200);
//	});
//};
//showScroll();
//品牌页字母表出现
function city() {
	$(window).scroll(function() {
		var scrollValue = $(window).scrollTop();
		scrollValue > 100 ? $(".c_brand_list").find(".letters").css({
			"position": "fixed",
			"left": "0",
			"padding-left": "100px"
		}) : $(".c_brand_list").find(".letters").css({
			"position": "relative",
			"left": "0",
			"padding-left": "0"
		});
	});
	$('.to_top').click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 200);
	});
};
city();

//品牌页
//点击出现城市
function open_more() {
	$more = $(".c_brand_list").find(".more");
	var a = 0;
	$more.click(function() {
		if(a % 2 == 0) {
			$(".country").css("height", "154px");
			$(this).addClass("trans");
		} else {
			$(".country").css("height", "48px");
			$(this).removeClass("trans");
		}
		a++
	})
}
open_more();
//图片阴影
function shadow() {
	$(".pro_list  ").hover(function() {
		$(this).find(".cover").css("display", "block");
		$(this).find("dd").addClass("bot_cover");

	}, function() {
		$(this).find(".cover").css("display", "none");
		$(this).find("dd").removeClass("bot_cover");
	})
}
shadow()