//文字不被选中
$(".prev").on("selectstart", function() {
	return false;
})
$(".next").on("selectstart", function() {
	return false;
})
$("#add").on("selectstart", function() {
	return false;
})
//鼠标单击颜色小图，大图改变
$("#d-small_img img").on("click",function () {
	console.log(1)
	$(".spec-preview img").attr("src",$(this).attr('src'))
 	$(".spec-preview img").attr("jqimg",$(this).attr('jqimg'))
});

$(".d-color ul li").click(function () {
	$(".d-color ul li").removeClass("on")
	$(this).addClass("on")
})
//鼠标移动到收藏变化
$("#d-col").hover(function() {
	$(this).addClass("hover")
}, function() {
	$(this).removeClass("hover")
});
//增加商品数量
$("#add").on("click", function() {
	num =$("#goodNum").val();
	num++;    
	$("#goodNum").val(num)
	$("#reduce").removeClass("off");
	console.log(num)
})	
//减少商品数量
$("#reduce").on("click",function () {
	num =$("#goodNum").val();
	if(num>1){
		num--;
		$("#goodNum").val(num);
	}
	if(num==1){
		$("#reduce").addClass("off");
	}
})
//选项卡
//扩展出jquery方法
			//参数option对象
			$.fn.tab = function(option) {
					//默认参数
					defaultOpt = {
						event: "click",
						current: 0,
						callback: function() {}
					};
					//实现默认函数
					//extend实现参数合并
					var opt = $.extend({}, defaultOpt, option);
					//				/$(this) this上下文     
					//隐式迭代each
					//连缀return
					return $(this).each(function() {
						var $title = $(this).find(".tab-title li");
						var $content = $(this).find(".tab-content li");
						if (opt.event == "hover") {
							opt.event = "mouseenter"
						}
						$title.on(opt.event, function() {
							//获取索引
							var index = $(this).index();
							//更改active
							$title.removeClass();
							$(this).addClass("active");
							//显示隐藏content
							$content.css("display", "none");
							$content.eq(index).css("display", "block");
							//实现回调函数
							opt.callback();
						});
						//实现默认显示第几个
						$title.eq(opt.current).trigger(opt.event);
					});
				}
				//运行
			$(".tab").tab({
				event:"click",
				callback:function () {
					console.log(1);
				}
			});

//固定位置
var win=$(window); //得到窗口对象
var sc=$(document);//得到document文档对象。
var title=$("#tab-title")
win.scroll(function () {
	if(sc.scrollTop()>=750){
		title.addClass("fix")
	}
	else{
		title.removeClass("fix")
		
	}
})
//单击查看评论
$("#see_much").click(function () {
	$(".d-hidden").show();
})
