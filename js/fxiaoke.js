(function($) {
	//header显示判定
	var changeHeaderClass = function() {
		if($(window).scrollTop() > $('header').height()) $('header').removeClass('transparent');
		else $('header').addClass('transparent');
	};
	//$(window).on("scroll", changeHeaderClass);
	
	//feature中的动画判定
	var feature_show = function() {
		var contop = $(window).scrollTop();
		var height = $(window).height();
		var feature_list = $('.feature_one');
		feature_list.each(function() {
			var children = $(this).children().children();
			var item_top = $(this).offset().top - contop;
			var item_bot = item_top + $(this).height();
			if((item_top >= 0 && item_top < height) || (item_bot > 0 && item_bot <= height)) {
				$(children[0]).addClass('ani_left');
				$(children[1]).addClass('ani_right');
			}
		});
	};
	feature_show();
	//$(window).on("scroll", feature_show);
	
	// 简单的节流函数
	function throttle(func, wait, mustRun) {
	    var timeout,
	        startTime = new Date();
	 
	    return function() {
	        var context = this,
	            args = arguments,
	            curTime = new Date();
	 
	        clearTimeout(timeout);
	        // 如果达到了规定的触发时间间隔，触发 handler
	        if(curTime - startTime >= mustRun){
	            func.apply(context,args);
	            startTime = curTime;
	        // 没达到触发间隔，重新设定定时器
	        }else{
	            timeout = setTimeout(func, wait);
	        }
	    };
	};
	
	var scrollEvent = throttle(function() {
		//滚动中的真正的操作
		changeHeaderClass();
		feature_show();
	},100,200)
	$(window).on("scroll", scrollEvent);
	
})(jQuery);