





var navi = (function(){
	return {
		toggle_navi:function() {
			$(".naviblock .expandable").toggleClass("expanded");
			if ($(".naviblock .expandable").hasClass("expanded")) navi.show_navi();
			else navi.hide_navi();
		},
		
		show_navi:function() {
			var navi_width = $(".naviblock .expandable").width();
			if ($(".wrapper").width()<=600) navi_width = $(".wrapper").width();
			$(".naviblock .expandable").css("right", -navi_width+"px").show().animate({right: 0}, 500);
		},
		
		hide_navi:function() {
			$(".naviblock .expandable").removeClass("expanded");
			var navi_width = $(".naviblock .expandable").width();
			if ($(".wrapper").width()<=600) navi_width = $(".wrapper").width();
			$(".naviblock .expandable").animate({right: -navi_width}, 500, function(){$(this).hide()});
		},
		
		init:function() {
			$(".naviblock .navilink").click(function(){
				navi.toggle_navi();
			});
	
			$(".naviblock .field").focus(function(){
				$(this).val('');
			});
			
			$(".naviblock .field").click(function(){
				$('.search .suggestions').slideDown(250);
			});
			
			$(".naviblock .search").mouseleave(function(){
				$(".naviblock .search .suggestions").slideUp(250);
			});
			
			$(".naviblock").mouseleave(function(){
				navi.hide_navi();
			});
		}
	}
})();



$(document).ready(function() {
	navi.init();
});



