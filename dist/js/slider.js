/*! mui 2015-11-06 */
!function(a){a.fn.mSlide=function(b){var c=a.extend({},a.fn.mSlide.defaults,b);return this.each(function(){function b(){var a=i.width();"horizontal"==c.effect?e.find(".slide-list").animate({"margin-left":-f*a},"slow"):"fade"==c.effect?(i.fadeOut(),i.eq(f).fadeIn()):(i.hide(),i.eq(f).show()),h.removeClass("active"),h.eq(f).addClass("active")}function d(){f++,f>=e.find(".slide-nav li").length&&(f=0),b()}var e=a(this),f=0,g=null,h=e.find(".slide-nav li"),i=e.find(".slide-list li");h.bind(c.eventType,function(){f=a(this).index(),b()}),g=setInterval(d,c.autoTime),e.bind("mouseover",function(){clearInterval(g)}).bind("mouseout",function(){g=setInterval(d,c.autoTime)})})},a.fn.mSlide.defaults={eventType:"mouseover",effect:"horizontal",autoTime:"3000"}}(jQuery);