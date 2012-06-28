Ext.define('Kitchensink.view.UserChart', {
    extend: 'Ext.Panel',
    xtype: 'userChart',
    config :{
                html: '<center><canvas id="user_chart_canvas" width="600" height="600">no canvas support</canvas></center>',
                scrollable: true,
                width:700,
                height:700,
                listeners: {
                    painted: function() {
						var bar4 = new RGraph.Bar('user_chart_canvas', [
								[9,1],
								[7,1],
								[5,3],
								[6,1],
								[8,0]]);
						bar4.Set('chart.tooltips', ['9/10', '1 Learning', '7/10', '1 Learning', '5/10', '3 Learnings', '6/10', '1 Learning', '8/10', 'No Learning']);
			            bar4.Set('chart.colors', ['#336699', '#992222']); 
			            bar4.Set('chart.key', ['Readiness', 'Active Learning']);
			            bar4.Set('chart.labels', ['Tech Skill','Communication','Team manage','Project Manage','Time Manage']);
			            bar4.Set('chart.numyticks', 5);
			            bar4.Set('chart.ylabels.count', 5);
			            bar4.Set('chart.gutter.left', 35);
			            bar4.Set('chart.variant', '3d');
			            bar4.Set('chart.strokestyle', 'transparent');
			            bar4.Set('chart.hmargin.grouped', 0);
			            bar4.Set('chart.scale.round', true);
//			            bar4.Set('chart.events.click', function(e){alert(e);});
			            bar4.Draw();
                    }
                }
            }
});