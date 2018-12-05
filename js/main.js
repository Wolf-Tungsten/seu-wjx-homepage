$(function(){
	
	//superslide无缝滚动
	jQuery('.post-12').slide({
			mainCell: ".news_list",    //切换元素的包裹层对象
			autoPlay: true,     //是否自动运行
			effect: "leftMarquee",  //动画效果 支持fade, top, left, topLoop, leftLoop, topMarquee, leftMarquee, fold, slideDown等效果
			opp: false,  //使动画效果相反
			vis: 3,  //mainCell的可视范围个数，当实际内容个数少于可视个数的时候，不执行SuperSlide效果。
			interTime: 50,  //自动运行间隔
			mouseOverStop: true,  //鼠标触摸暂停滚动
			easing: 'swing'  //缓动效果，需引用jquery.easing.min.js
	});
		 
	/*新闻图片切换*/
	$(".post-11 .focus").sudyfocus({      
		p:11,      
		zWidth:362,      
		zHeight:253,  
		title:{        
			isAutoWidth: false,
			active:true      
		},  
		 text: {        
			 active: false,
			 isAutoHeight: false,   
			 href: false 
		},  
		response: true,     
		speed:700, 
		pagination: true,
		navigation: true,
		isNavHover: false,
		href:true,
		effect: 'fade'
	});
	/*友情链接下拉*/
	$(".botlinks").each(function(index, el){
		$(el).find(".links-wrap").hover(function(){
			$(this).addClass('wrap-open').children('.link-items').stop(true,true).slideDown(300);
		},function(){
			$(this).removeClass('wrap-open').children('.link-items').stop(true,true).slideUp(100);
		});
	});

});
