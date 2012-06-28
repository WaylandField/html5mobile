Ext.define('Kitchensink.view.CanvasView', {
    extend: 'Ext.Container',
    xtype: 'canvas',
    config :{
                html: '<center><canvas id="mycanvas" onclick="javascript:document.location=document.location+\'#role/12\'" width="980" height="760" >no canvas support</canvas></center>',
                scrollable: true,
                centered : true,
                width:1000,
                height:700,
                listeners: {
                    painted: function() {
		            	var groups = [
		            	              [{name:"Dev Manager",count:"46",id:4}],
		            	              [{name:"Product Manager",count:"38",id:5},
		            	               {name:"Senior Software Engineer",count:"30",id:7},
		            	               {name:"Senior Sales",count:"32",id:7}],
		            	              [{name:"CEO",count:"28",id:1},
		            	               {name:"Sales Manager",count:"22",id:7},
		            	               {name:"Achitect",count:"21",id:3},
		            	               {name:"CTO",count:"23",id:2},
		            	               {name:"Senior QA",count:"22",id:7},
		            	               {name:"QA Manager",count:"22",id:7}],
		            	              [{name:"Sales",count:"12",id:6},
		            	               {name:"Senior Customer Support Expert",count:"19",id:7},
		            	               {name:"DBA",count:"16",id:7},
		            	               {name:"Office Admin",count:"17",id:7},
		            	               {name:"IT Export",count:"11",id:7},
		            	               {name:"Product Service Expert",count:"35",id:7}],
		            	              [{name:"programmer",count:"9",id:8},
		            	               {name:"Sales",count:"8",id:7},
		            	               {name:"UI Developer",count:"8",id:7},
		            	               {name:"Java Developer",count:"2",id:7},
		            	               {name:"Project owner",count:"1",id:7}]
		            	              ];
		            	var laddler = [90, 60, 40,27,16];
            		    function getCircleGraph(group, ladder){
            				var circles = [];
            				var orbit = [];
            				var angle = 0, lastAngle=0;
            				var pos = {};
            				var x=0, y=0 ;
            				var radius = 0;
            				var start_angle=0;
            				var last_start_angle = 0;
            				for(var i=0;i<group.length;i++){
            					var startAngle = lastAngle;
            					angle = (Math.PI*2)/group[i].length;
            					start_angle = angle/2; 
            					lastAngle = angle;
            					radius += i>1?ladder[i]+ladder[i-1]+1:1+ladder[i];
            					orbit.push(radius);
            					for(var j=0;j<group[i].length;j++){
            						pos = {
            								x:i>0?Math.cos(last_start_angle+start_angle+(j)*angle)*radius:0, 
            								y:i>0?Math.sin(last_start_angle+start_angle+(j)*angle)*radius:0, 
            								r:ladder[i]
            							};
            						circles.push({"pos":pos, data:group[i][j]});
            					}
            					last_start_angle = last_start_angle + start_angle;
            				}
            				return {circles:circles, orbit:orbit};
            			}
            		    var canvas = document.getElementById('mycanvas');   
            		      if (canvas.getContext){  
            		          var ctx = canvas.getContext('2d');  
            		      }
            		      var titleArray = [];
            		      var x=canvas.width/2;y=canvas.height/2;
            		      var color_i=0;
            		      function draw(){
            		  		color_i = 0;
            		  	    ctx.clearRect(0,0,canvas.width,canvas.height);
            		  	    graph = getCircleGraph(groups, laddler);

            		  		orbit = graph['orbit'];
            		  	    ctx.strokeStyle="rgba(30,30,30, 0.2)";
            		  		for(var i=0;i<orbit.length;i++){
            		  			ctx.beginPath(); 
            		  			ctx.arc(x,y,orbit[i],0,Math.PI*2 ,false); // Outer circle 
            		  			ctx.closePath();
            		  			ctx.stroke();
            		  		}
            		  	    
            		  	    circles = graph['circles'];
            		  		var offset = getOffset();
            		  		for(var i=0;i<circles.length;i++){
            		  			var pos = circles[i].pos;
            		  			var data = circles[i].data;
            		  			var color = getStyle();
            		  			ctx.fillStyle="rgba("+color[0]+", "+color[1]+", "+color[2]+", 0.5)";
            		  			ctx.strokeStyle="rgba("+color[0]+", "+color[1]+", "+color[2]+", 1)";
            		  			ctx.beginPath();  
            		  			ctx.arc(pos.x+x+offset[0],pos.y+y+offset[1],pos.r,0,Math.PI*2 ,false); // Outer circle  
            		  			ctx.closePath();  
            		  			ctx.stroke();
            		  			ctx.fill();
            		  			ctx.fillStyle="#ff0000";
            		  			ctx.font="bold 15pt Calibri";
            		  			ctx.shadowColor="white";
            		  			ctx.shadowBlur = 10;
            		  			ctx.fillText(data.count,pos.x+x+offset[0],pos.y+y+offset[1]);
            		  			ctx.fillStyle="#000000";
            		  			ctx.font="normal 8pt Calibri";
            		  			ctx.shadowColor="white";
            		  			ctx.shadowBlur = 10;
            		  			ctx.fillText(data.name,pos.x+x+offset[0],pos.y+y+offset[1]+20);
            		  		}
            		      }
            		      function getStyle(){
            		  		var colors = [
            		  				[60,90,120],
            		  				[120,90,60],
            		  				[30,90,150],
            		  				[150,30,90],
            		  				[30,90,180],
            		  				[100,230,1],
            		  				[22,67,99],
            		  				[66,43,97],
            		  				[99,200,10],
            		  				[66,250,11]
            		  					];
            		  		color_i = (color_i+1) % 10;
            		  		return colors[color_i];
            		      }
            		      var pos_i=0;
            		      function getOffset(){
            		          var jj =[[1,1],[0,0],[-1,-1]]
            		          pos_i=(pos_i+1)%3;
            		      	return jj[pos_i];
            		      }
            		      draw();
                    }
                }
            }
});