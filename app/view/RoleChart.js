Ext.define('Kitchensink.view.RoleChart', {
    extend: 'Ext.Panel',
    xtype: 'roleChart',
    config :{
                html: '<center><canvas id="chart_canvas" width="700" height="700">no canvas support</canvas></center>',
                scrollable: true,
                width:700,
                height:700,
                listeners: {
                    painted: function() {
						var radar = new RGraph.Radar('chart_canvas', 
								[9,7,5,6,8],
								[2,6,4,3,2],
								[7,6,5,7,3],
								[4,1,8,3,5],
								[5,3,1,9,1],
								[1,6,4,2,1],
								[5,3,2,1,2]);
					    radar.Set('chart.strokestyle', 'black');
					    radar.Set('chart.colors.alpha', 0.3);
					    radar.Set('chart.colors', ['#ff0000', 
					                               '#00ff00', 
					                               '#0000ff', 
					                               '#ffff00', 
					                               '#ff00ff', 
					                               '#00ffff', 
					                               '#669911', 
					                               '#33aae6', 
					                               '#ce11cd', 
					                               '#cddd12', 
					                               '#aecd34']);
					    
					    if (!RGraph.isOld()) {
					        radar.Set('chart.tooltips', [
"1","2"
					                                     ]);
					    }
					
//					    radar.Set('chart.key', ['2000','2001','2002']);
					    radar.Set('chart.key.position', 'graph');
					    radar.Set('chart.labels', ['Tech Skill','Communication','Team manage','Project Manage','Time Manage']);
					    radar.Set('chart.gutter.top', 35);
					    radar.Set('chart.accumulative', false);
					    radar.Set('chart.labels.axes', '');
					    radar.Set('chart.axes.color', 'transparent');
					    radar.Set('chart.events.click', function(e){alert(e);});
					    radar.Draw();
                    }
                }
            }
});