//整点倒计时
var timer = null;

function set_time(start_id, text_class, start_time) {
	var start = document.getElementById(start_id);
	var display = document.getElementsByClassName(text_class);
	console.log(display[0])
	var now = new Date();
	var furturn = new Date();
	var end = new Date();
	furturn.setHours(start_time);
	furturn.setMinutes(0);
	furturn.setSeconds(0);
	furturn.setMilliseconds(0);
	end.setHours(24);
	end.setMinutes(0);
	end.setSeconds(0);
	end.setMilliseconds(0);
	var ms1 = furturn - now;
	var ms2 = end - now;
	hours1 = parseInt((ms1 % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	minute1 = parseInt((ms1 % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000) / (60 * 1000));
	second1 = parseInt((ms1 % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000) % (60 * 1000) / 1000)
	hours2 = parseInt((ms2 % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
	minute2 = parseInt((ms2 % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000) / (60 * 1000));
	second2 = parseInt((ms2 % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000) % (60 * 1000) / 1000);

	if(now.getHours() < start_time) {
		start.innerHTML = "距离本场开始：" + (Array(2).join(0) + hours1).slice(-2) + ":" + (Array(2).join(0) + minute1).slice(-2) + ":" + (Array(2).join(0) + second1).slice(-2)

		for(var i = 0; i < display.length; i++) {
			display[i].style.backgroundColor = "#8DAAD1";
		}
	} else {
		start.innerHTML = "距离本场结束：" + (Array(2).join(0) + hours2).slice(-2) + ":" + (Array(2).join(0) + minute2).slice(-2) + ":" + (Array(2).join(0) + second2).slice(-2)
		for(var i = 0; i < display.length; i++) {
			display[i].style.backgroundColor = " #e74c3c";
		}

	}
}
timer = setInterval('set_time("time_eight", "add_eight", 20)', 1000);
timer = setInterval('set_time("time_two", "add_two ", 14)', 1000);
timer = setInterval('set_time("time_ten", "add_ten", 10)', 1000);