//Tabs插件
;(function($) {
	$.fn.tabs = function(options) {
		return this.each(function() {
			var defaults = { event:"click" };
			var opt = $.extend({},defaults,options);
			var obj = $(this);
			var tabBox = $(".tab_box > div", obj);
			var items = $(".tab_menu ul li", obj);
			var tabHandle = function(elem){
				elem.addClass("current")
					.siblings("li").removeClass("current");
				tabBox.eq(elem.index()).removeClass("hide")
					.siblings("div").addClass("hide");
			};
			items.bind(opt.event,function(){
				tabHandle($(this));
			});
			
		});
	};
})(jQuery);