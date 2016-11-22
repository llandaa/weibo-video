$(function() {
/****搜索狂***/
	$('.seacrh-btn').on('click', function() {
		$('.search-box').fadeToggle(300);
	})
	$('.search-text').each(function(i, item) {
		$(item).on('click', function() {
			$('#search-keyword').val($(item).html())
		})
	})
/******放大视屏*******/
	var videoBigW = $('.am-container').width()
	var videosmallW = $('.video-box').width()
	var bigKey = true;
	$('.video-big').on('click',function(){
		$('.arrow-right').text("<")
		$('.arrow-right').css({
			"color":"#FFAD6D"
		})
		if(bigKey){
		cebiantrans
		$('.video').css({
			width:videoBigW
		})
		$('.video-box').css({
			width:videoBigW
		})
		$('.cebian-box').css({
			"z-index":"-1"
		})
		var videoBigH = $('video').height()
		var cebiantrans = videoBigH+26
		$('.cebian-box').css({
			"transform":"translateY("+cebiantrans+"px)"
		})
		bigKey = false;
	}else{
		$('.arrow-right').text(">")
		$('.arrow-right').css({
			"color":"#FFF"
		})
		$('.video').css({
			width:videosmallW
		})
		$('.video-box').css({
			width:videosmallW
		})
		var videoBigH = $('video').height()
		var cebiantrans = videoBigH+26
		$('.cebian-box').css({
			"transform":"translateY(0px)"
		})
		bigKey = true
	}
	})
/******加载更多******/
$('.loadmorebtn').on('click',function(){
	$('.loadmore').show()
	$('.loadmorebtn').hide()
})
$(function(){
  var progress = $.AMUI.progress;
   $('#np-fd').on('click', function() {
    progress.done(true);
  });
});
})
var box1=document.getElementById('box1');
var backTop=document.getElementById('back-top');
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollT>500)
		{
			box1.style.display="block"
		}else{
			box1.style.display="none"
		}
}
	var disX=0,disY=0;
	box1.onmousedown=function(e){
		var e=e||window.event;
		disX=e.clientX-this.offsetLeft;
		disY=e.clientY-this.offsetTop;
		document.onmousemove=function(e){
		var e=e||window.event;
		var l=e.clientX-disX;
		var t=e.clientY-disY;
		if(l<0){
			l=0;
		}else if(l>document.documentElement.clientWidth-box1.offsetWidth){
			l=document.documentElement.clientWidth-box1.offsetWidth;	
		}
		if(t<-200){
			t=-200;
		}else if(t>document.documentElement.clientHeight-box1.offsetHeight){
			t=document.documentElement.clientHeight-box1.offsetHeight;	
		}
		box1.style.left=l+'px';
		box1.style.top=t+'px';
		}
		document.onmouseup=function(e){
			var e=e||window.event;
			document.onmousemove=null;
			document.onmouseup=null;
		}
	}
	