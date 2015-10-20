;(function ($) {
	$.fn.mSlide = function(options){
		var opts = $.extend({}, $.fn.mSlide.defaults, options);
		return this.each(function(){
			var obj = $(this);
			var now = 0;
			var timer = null;
			var menus = obj.find('.slide-nav li');
			var items = obj.find('.slide-list li');
			
			menus.bind(opts.eventType, function(){
				now = $(this).index();
				show();
			});

			function show(){
				var liLength = items.width();
				if( opts.effect == 'horizontal'){
					obj.find('.slide-list').animate({'margin-left':-now * liLength}, 'slow');
				}else if( opts.effect == 'fade'){
					items.fadeOut();
					items.eq(now).fadeIn();
				}else{
					items.hide();
					items.eq(now).show();
				}
				menus.removeClass('active');
				menus.eq(now).addClass('active');
			}

			timer = setInterval(autoPlay,opts.autoTime);

			obj.bind('mouseover', function(){
				clearInterval(timer);
			}).bind('mouseout', function(){
				timer = setInterval(autoPlay,opts.autoTime);
			});

			function autoPlay(){
				now++;
				if(now >= obj.find('.slide-nav li').length){
					now = 0;
				}
				show();
			}
		});
	}
	$.fn.mSlide.defaults = {
		eventType: 'mouseover',
		effect: 'horizontal',
		autoTime: '3000'
	}
})(jQuery); 