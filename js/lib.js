
$(document).ready(function($) {
	
	$('.nav-con span').click(function(event) {
		$(this).next('ul').stop().slideToggle();
	});
	$('.m-sele dd span').click(function(event) {
		$(this).addClass('on').siblings('span').removeClass('on');
	});

	// 选项卡 鼠标经过切换
	$(".TAB li").mousemove(function(){
	  var tab=$(this).parent(".TAB");
	  var con=tab.attr("id");
	  var on=tab.find("li").index(this);
	  $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
	  $(con).eq(on).show().siblings(con).hide();
	});

	//分栏等高js
	function myBox(){
	    var _winw = $(window).width();
	    var _sheight = $('.side-col').height();
	    var _mheight = $('.main-col').height();
	    if( _winw>=992 ){
	        $('.side-col,.main-col').height(Math.max(_sheight,_mheight));
	    }else{
	        $('.side-col,.main-col').height('auto');
	    }
	}
	myBox();
	$(window).on('resize',function(){
	    myBox();
	});

	//侧边栏导航
	$('.snv .s1').click(function(){
	      var sub = $(this).parent('li').find('dl');
	      if( !sub.length > 0){
	          return true;
	      }
	      if(sub.is(':visible')){
	          sub.hide();
	          $(this).parent('li').removeClass('on');
	      }else{
	          $('.snv dl').hide();
	          $('.snv .on').removeClass('on');
	          $(this).parent('li').addClass('on');
	          sub.show();
	      }
	      return false;
	  });

	$('#top .pass').click(function(){
		$('.m-pop').show();
	});

	$('.m-pop .close').click(function(){
		$('.m-pop').hide();
	});


});