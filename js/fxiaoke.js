(function($) {
	var changeHeaderClass = function() {
		var contop = $(window).scrollTop();
		var height = $(window).height();
		
		//判断header
		if(contop>80) $('header').removeClass('transparent');
		else $('header').addClass('transparent');
		
		//判断feature动画
		var feature_list = $('.feature_one');
		feature_list.each(function() {
			var item_top = $(this).offset().top - contop;
			var item_bot = item_top + $(this).height();
			if(item_top < height || item_bot <= height) {
				$($(this).children()[0]).addClass('ani_left');
				$($(this).children()[1]).addClass('ani_right');
			}
		});
	};
	$(window).on("scroll",changeHeaderClass);
})(jQuery);
