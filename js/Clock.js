
(function(){
	// define the clock center
	var point={
		x: 200,
		y: 200,
		radius: 100
	};
	
	// define hours pointer, minutes pointer, seconds pointer length
	var pointerLen={
		hours: 40,
		minutes: 60,
		seconds: 80
	};
	
	var Clock=function(canvas){
		this.canvas=document.getElementById(canvas) || this.getCanvas();
		this.isStart=false;
		var context=this.canvas.getContext('2d');
		context.translate(point.x, point.y);
		
		//alert(hours + ":" + minutes + ":" + seconds);
	}
	
	Clock.prototype.getCanvas=function(){
		var canvas=document.getElementById('clock');
		
		return canvas;
	}
	
	Clock.prototype.drawCircle=function(x, y, radius){
		var context=this.canvas.getContext('2d');
		context.save();
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI*2);
		context.stroke();
		context.closePath();
		context.restore();
	}
	
	Clock.prototype.drawLine=function(x1, y1, x2, y2){
		var context=this.canvas.getContext('2d');
		context.restore();
		
		//context.clearRect(200, 200, 0, 0);
		//context.clearRect(200, -200, 0, 0);
		//context.clearRect(-100, -100, 100, 100);
		//context.save();
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.closePath();
		context.stroke();
		
	}
	
	Clock.prototype.drawPointer=function(minutes, len){
		var angle=-(minutes*6-90);
		var x=parseInt(Math.cos(angle / 360 * Math.PI*2) * len);				// if minutes=15 x=cos(15*6*PI/360*2)=cos(PI/4*2)
		var y=parseInt(Math.sin(angle / 360 * Math.PI*2) * len);
		/*x=x>0?x+200:x;
		y=y>0?y+200:y;*/
		
		y=-y;
		//alert(x + ":" + y +":" + Math.cos(0.25*Math.PI)*len);
		//if(this.isStart==false)
		
		this.drawLine(0, 0, x, y);
		//var context=this.canvas.getContext('2d');
	}
	
	Clock.prototype.drawClock=function(){
		var date=new Date();
		var hours=date.getHours();					// 60*60*60 s one circle
		var minutes=date.getMinutes();				// 60*60 s one circle
		var seconds=date.getSeconds();				// 60 s one circle
		this.drawPointer(hours*5, pointerLen.hours);
		this.drawPointer(minutes, pointerLen.minutes);
		this.drawPointer(seconds, pointerLen.seconds);
	}
	
	var clock=new Clock("canvas");
	clock.drawCircle(0, 0, point.radius);
	
	setInterval(function(){
		clock.drawClock()
	}, 1000);
	/*//alert(parseInt(Math.cos(3/2*Math.PI)));
	for(var i=0; i<6; i++)
	//console.log();
		//console.log(Math.cos(15*i*6/360*Math.PI *2));
		clock.drawMinutes(10*i, 60);*/
	
	
})();


