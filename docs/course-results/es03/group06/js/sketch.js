
function setup() {
  // createCanvas(windowWidth,windowHeight);
  noCanvas();
  // select('canvas').position(0,0);
}

function draw() {
  background("yellow");
  fill('red');
  textSize(80);
  text(frameCount,width/2,height/2);

  if(frameCount==1000){
    mouseClicked();
  }
}


function mouseClicked(){
  window.open("page2.html","_self");

}




// 试试  翻页滑动效果

	// $(function(){
	// 	var btn_index=0;
	// 	/*右边按钮点击*/
	// 	$('.section-btn li').each(function(index) {
	// 		$(this).click(function(){
	// 			btn_index=index;
	// 			scroller();
	// 		})
	// 	});
	// 	/*翻页按钮点击*/
	// 	$('.go-btn').one('click',btn_go);
	// 	function btn_go(){
	// 		go_up();scroller();
	// 		setTimeout(function(){$('.go-btn').one('click',btn_go)},1000)
	// 	};
	// 	/*响应鼠标*/
	// 	$('.section-wrap').one('mousewheel',mouse_);
	// 	function mouse_(event){
	// 		if (event.deltaY<0) {go_up()}
	// 		else{go_down()}
	// 		scroller();
	// 		setTimeout(function(){$('.section-wrap').one('mousewheel',mouse_)},1000)
	// 	};
  //
	// 	/*当前页面赋值*/
	// 	function go_up(){btn_index++;if(btn_index==$('.section-btn li').length){btn_index=$('.section-btn li').length-1};}
	// 	function go_down(){btn_index--;if(btn_index<0){btn_index=0};}
  //
	// 	/*页面滑动*/
	// 	function scroller(){
	// 		$('.section-btn li').eq(btn_index).addClass('cur').siblings().removeClass('cur');
	// 		$('.section-wrap').attr("class","section-wrap").addClass(function() {
	// 				return "put-section-"+btn_index;
	// 		 }).find('.section').eq(btn_index).find('.title').addClass('active');
	// 	};
  //
	// 	/*响应键盘上下键*/
	// 	$(document).one('keydown',keyaction);
	// 	function keyaction(event){
	// 		var e=event||window.event;
	// 		var key=e.keyCode||e.which||e.charCode;
	// 		switch(key)	{
	// 			case 38: go_down();scroller();
	// 			break;
	// 			case 40: go_up();scroller();
	// 			break;
	// 		};
	// 		setTimeout(function(){$(document).one('keydown',keyaction)},1000)
	// 	}
  //
  //
	// })
