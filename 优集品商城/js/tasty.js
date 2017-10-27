$(document).ready(function() {
	//点击箭头 品牌栏的变化
	var a = 0;
	$(".b_brand_arrow").click(function() {
		if(a == 0) {
			a = 1;
			$(this).parents(".b_brand").stop(true).animate({
				height: "114px"
			});
			$(this).find(".b_brand_arrow1").css({
				"transform": "rotate(180deg)"
			});
		} else {
			a = 0;
			$(this).parents(".b_brand").stop(true).animate({
				height: "48px"
			});
			$(this).find(".b_brand_arrow1").css({
				"transform": "rotate(0deg)"
			});
		}
	});

	//点击箭头 排序一栏
	var b = 0;
	$(".b_sort_arrow").click(function() {
		if(b == 0) {
			b = 1;
			$(".b_sort ul li").css("display", "block");
			$(".b_sort ul li").eq(0).siblings("li").css("border-left-width", 1 + "px");
			$(".b_sort ul li").eq(0).siblings("li").css("border-left-color", "#F8F8F8");
			$(".b_sort ul li").eq(0).siblings("li").css("border-left-style", "solid");
			$(".b_sort ul li").eq(0).siblings("li").css("border-right-width", 1 + "px");
			$(".b_sort ul li").eq(0).siblings("li").css("border-right-color", "#F8F8F8");
			$(".b_sort ul li").eq(0).siblings("li").css("border-right-style", "solid");

			$(".b_sort ul li").eq(2).css("border-bottom-width", 1 + "px");
			$(".b_sort ul li").eq(2).css("border-bottom-color", "#F8F8F8");
			$(".b_sort ul li").eq(2).css("border-bottom-style", "solid");
			$(this).css({
				"transform": "rotate(-90deg)"
			});
		} else {
			b = 0;
			$(".b_sort ul li").eq(0).siblings("li").css("display", "none");
			$(this).css({
				"transform": "rotate(0deg)"
			});
		}
	});

	//价格排序
	var $arr = $(".b_goods_tasty dl");
	$(".b_sort li").click(function() {
		console.log($arr)
		if($(this).text() == '按价格升序') {
			var $blist = $(".b_goods_tasty dl");
			$blist.sort(function(a, b) {
				var price_a = $(a).find(".b_special_price").text().slice(1);
				var price_b = $(b).find(".b_special_price").text().slice(1);
				return price_a - price_b;
			})
			$(".b_goods_tasty").empty();
			$(".b_goods_tasty").append($blist);
			return;
		}

		if($(this).text() == '按价格降序') {
			var $blist = $(".b_goods_tasty dl");
			$blist.sort(function(a, b) {
				var price_a = $(a).find(".b_special_price").text().slice(1);
				var price_b = $(b).find(".b_special_price").text().slice(1);
				return price_b - price_a;
			})
			$(".b_goods_tasty").empty();
			$(".b_goods_tasty").append($blist);
			return;
		}
		if($(this).text() == '按人气排序') {
			$(".b_goods_tasty").empty();
			$(".b_goods_tasty").append($arr);
			return;
		}
	});

})