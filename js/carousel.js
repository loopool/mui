;(function($){
	$.fn.mCarousel = function( opt ) {
		var defaults = {
				speed: 300,
				direction: 'left', //  运动方向 可选 left,top
				prevClass: 'slider-prev',
				nextClass: 'slider-next',
				wrapperClass: 'slider-wrapper',
				moveClass: 'slider-move',
				step:1,
				auto:true,
				interval:2000
		};
		
		var options = $.extend( defaults, opt );
		var dir = options.direction;
		var $slider = $( this ),
			$sliderPrev = $( '.' + options.prevClass, $slider ),
			$sliderNext = $( '.' + options.nextClass, $slider ),
			$sliderMove = $( '.' + options.moveClass, $slider ),
			$item = $sliderMove.children(),
			timer = null,
			$iSteep = 0;
		
		//初始化样式
		if( dir == 'left' ) {
			$iSteep = $item.outerWidth();
			$sliderMove.css('width',$item.length * $iSteep +'px' );
		} 
		else if( dir == 'top' ) {
			$iSteep = $item.outerHeight();
			$sliderMove.css('height',$item.length * $iSteep +'px' );
		}

		//添加点击事件
		$sliderNext.bind('click',moveNext);
		$sliderPrev.bind('click',movePrev);

		//缓存运动样式
		var data1 = {}, data2 = {};
		var stepWidth = $iSteep*options.step;
		data1[dir] = -stepWidth;
		data2[dir] = 0;

		//运动样式函数
		function moveNext(){
			$sliderMove.animate( data1,  options.speed, function(){
				$sliderMove.css( dir, 0 ).children("li:lt("+options.step+")").appendTo( $sliderMove );
			});
		}

		function movePrev(){
			$sliderMove.css( dir,-$iSteep+'px').children("li").slice(-options.step).prependTo( $sliderMove );
			$sliderMove.animate(data2,  options.speed);
		}
		
		//自动触发
		var autoPlay=function(){
			timer = setInterval(moveNext,options.interval);
		};
		var autoStop = function(){
			clearInterval(timer);
		};
		if (options.auto){
			autoPlay();
			$slider.hover(autoStop,autoPlay);
		}
		
		return this;
	};
})(jQuery);
