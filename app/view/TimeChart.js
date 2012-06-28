Ext.define('Kitchensink.view.TimeChart', {
    extend: 'Ext.Panel',
    xtype: 'timeChart',
    config :{
                html: '<center><canvas id="time_chart_canvas" width="600" height="600">no canvas support</canvas></center>',
                scrollable: true,
                width:700,
                height:700,
                listeners: {
                    painted: function() {
	var line1 = new RGraph.Line('time_chart_canvas', [0,1,3,5]);
    line1.Set('chart.background.grid', true);
    line1.Set('chart.linewidth', 5);
    line1.Set('chart.gutter.left', 35);
    line1.Set('chart.hmargin', 5);

    if (!document.all || RGraph.isIE9up()) {
        line1.Set('chart.shadow', true);
    }
    line1.Set('chart.tickmarks', null);
    line1.Set('chart.units.pre', '200');
    line1.Set('chart.colors', ['red', 'green']);
    //line1.Set('chart.curvy', 1);
    line1.Set('chart.curvy.factor', 0.25);
    line1.Set('chart.labels',['SE','SSE','Lead-SE','Principle-SE']);
    line1.Set('chart.numxticks', 2001);
    line1.Set('chart.background.grid.hlines', false);
    line1.Set('chart.background.grid.autofit.numvlines', 11);
    //line1.Set('chart.background.grid.border', false);
    
    RGraph.isOld() ? line1.Draw() : RGraph.Effects.Line.UnfoldFromCenter(line1);
                    }
                }
            }
});