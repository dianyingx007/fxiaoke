(function($) {
	var changeHeaderClass = function() {
		if($(window).scrollTop()>80) $('header').removeClass('transparent');
		else $('header').addClass('transparent');
	};
	$(window).on("scroll",changeHeaderClass);
})(jQuery);
