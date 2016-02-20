var data=['iphone6', 'ipad','三星笔记本','佳能相机','惠普打印机','50元充值卡','1000元超市购物券','谢谢参与']，
    timer=null;
window.onload=function(){
	var play=document.getElementById('play'),
	    stop=document.getElementById('stop');
	//开始抽奖
	play.onclick=playFun;
}
    
function playFun() {
	 var title=document.getElementById('title');
	 timer=setInterval(function(){
	 	var random=Math.floor(Math.random()*data.length);
	 	title.innerHTML=data[random];
	 }, 50);
}