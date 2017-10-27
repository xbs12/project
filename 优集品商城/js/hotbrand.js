$("#d-sort_method").on("click", selectList);
//select 下拉
function selectList(e) {
	var flag = $("#d-sort_method_flag");
	if (!flag.attr("class")) {
		flag.siblings("ul").css("height", "auto");
		flag.addClass("open");
	} else {
     flag.siblings("ul").css("height", "30px");
     flag.removeClass("open")
	}
}
//单击添加
$("#d-sort_method li").on("click",dmove);
function dmove(e) {
	$("#d-sort_method ul").prepend($(this));
	$("#d-sort_method ul li").eq(0).css("border","none")
	$("#d-sort_method ul li").eq(1).css({"border-right": "2px solid #F2F2F2","border-left": "2px solid #F2F2F2"})
	$("#d-sort_method ul li").eq(2).css({"border-right": "2px solid #F2F2F2","border-left": "2px solid #F2F2F2","border-bottom": "2px solid #F2F2F2"})
	
}

//原来顺序


//价格排序
var $arr=$(".d-goods_list dl");
$("#d-sort_method li").click(function() {
	
	if ($(this).text() == '按价格升序') {
		var $dlist=$(".d-goods_list dl");
	console.log($dlist.find(".d-special_price").text());
		$dlist.sort(function(a, b) {
					var price_a=$(a).find(".d-special_price").text().slice(1);
					var price_b=$(b).find(".d-special_price").text().slice(1);
					return price_a-price_b;
		})
		$(".d-goods_list").empty();
		$(".d-goods_list").append($dlist);
	}
	
	 if($(this).text() == '按价格降序'){
		var $dlist=$(".d-goods_list dl");
	console.log($dlist.find(".d-special_price").text());
		$dlist.sort(function(a, b) {
					var price_a=$(a).find(".d-special_price").text().slice(1);
					var price_b=$(b).find(".d-special_price").text().slice(1);
					return price_b-price_a;
		})
		$(".d-goods_list").empty();
		$(".d-goods_list").append($dlist);
	}
	 if($(this).text() == '按人气排序'){	 	
 	   $(".d-goods_list").empty();
	 	$(".d-goods_list").append($arr);
	 }
});

//解除click事件并且恢复到原来
//function old(x) {
//	$("#d-sort_method").off("click", "li");
//	x.siblings("ul").css("height", "30px");
//	x.removeClass("open");
//
//}
//移动到下拉列表变色
$("#d-sort_method ul li").hover(function() {
		if ($(this).index() != 0) {
			$(this).addClass("on");
		}
	},
	function() {
		$(this).removeClass("on");
	});

//移动到商品列表变色
$(".d-goods_list dl").hover(function() {
	$(this).find("dd").addClass("hov");
	$(this).find(".d-mask").show()
}, function() {
	$(this).find("dd").removeClass("hov")
	$(this).find(".d-mask").hide();
})