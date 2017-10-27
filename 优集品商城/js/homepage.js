            var index = 0;
			var timer = null;
			$(".fix").on("selectstart",function () {
				return false
			})			
				//秒轮播一次
			function happen() {
				if (index == 1) {
					index = 0;
				} else {
					index++;
				}
				$(".circle li").css("background", "white");
				$(".circle li").eq(index).css("background", "red");
				$(".slider_item").hide().eq(index).show();
			}
			//定时器
			timer = setInterval(happen, 2000);
			//清除定时器和重启定时器
			$(".e_slider_main").hover(function() {
				clearInterval(timer);
				$(".fix").show();

			}, function() {
				timer = setInterval(happen, 1000);
				$(".fix").hide();

			})
			//左箭头
			$(".left").click(function() {
				if (index == 0) {
					index = 1;
				} else {
					index--;
				}
				console.log(index);
				$(".slider_item").hide().eq(index).show();
			})
			$(".left").hover(function() {
					$(".left").css("opacity", 1)
				}, function() {
					$(".left").css("opacity", 0.4)

				})
				//右箭头
			$(".right").click(function() {
				if (index == 1) {
					index = 0;
				} else {
					index++;
				}
				console.log(index);
				$(".slider_item").hide().eq(index).show();
			})
			$(".right").hover(function() {
					$(".right").css("opacity", 1)
				}, function() {
					$(".right").css("opacity", 0.4)

				})
				//生成圆点
			$(".slider_item").each(function(i) {
				var circle = $("<li></li>")
				if(i==0){
					circle.css("background", "red");
				}
				$(".circle").append(circle);
				circle.hover(function() {
                    	$(".slider_item").hide().eq(i).show();
                    	$(".circle li").css("background", "white");
                    	$(this).css("background","red")
                    	index=i;
				}, function() {
                     $(this).css("background","white")
				})
			})