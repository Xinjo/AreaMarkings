/*
 * Name:		AreaMarkings
 * Author(s):		Xinjo/Michel de Nijs
 * Version:		0.0.4
 * Description:		A plugin for Flot to create markings of all kinds of shapes easily.
 */
 
(function ($) {
    function init(plot) {		
		function drawAreaMarkings(plot, ctx) {			
			var markings = plot.getOptions().grid.areaMarkings;		
			var data = plot.getData();
			var axes = plot.getAxes();
			//console.log(axes);
			
			if(markings) {			
				$.each(markings, function(iM, eM) {							
					if(eM) {
						var points = eM.points == null ? null : eM.points;
						var lw = eM.lineWidth == null ? 1 : eM.lineWidth;
						var lc = eM.lineColor == null ? "black" : eM.lineColor;
						var fc = eM.fillColor == null ? "black" : eM.fillColor;
						var bs = eM.betweenSeries == null ? null : eM.betweenSeries;
						
						if(points || bs) {
							ctx.beginPath();
						
							if(points && points.length > 0) {
								$.each(points, function(iP, eP) {
									if(eP[0] === "min") { eP[0] = axes.xaxis.min; }	
									if(eP[0] === "max") { eP[0] = axes.xaxis.max; }
									if(eP[1] === "min") { eP[1] = axes.yaxis.min; }
									if(eP[1] === "max") { eP[1] = axes.yaxis.max; }
									
 									var offset = plot.pointOffset( { x: eP[0], y: eP[1] } );
									
									ctx.lineTo(offset.left, offset.top);						
								});								
							} 
							
							if(bs && bs.length > 1) {
								var ds1 = data[bs[0]];
								var ds2 = data[bs[1]];

								$.each(ds1.data, function(iDS1, eDS1) {
									var offset = plot.pointOffset( { x: eDS1[0], y: eDS1[1] } );
									
									ctx.lineTo(offset.left, offset.top);
								});
								
								ds2.data.reverse();
								$.each(ds2.data, function(iDS2, eDS2) {
									var offset = plot.pointOffset( { x: eDS2[0], y: eDS2[1] } );
									
									ctx.lineTo(offset.left, offset.top);
								});
							}
							
							ctx.lineWidth = lw;						
							ctx.fillStyle = fc;
							ctx.fill();
							if(lw > 0) {
								ctx.strokeStyle = lc;
								ctx.stroke();
							}
						
							ctx.closePath();
						}
					}
				});
			}
		}
		
		plot.hooks.drawBackground.push(drawAreaMarkings)
    }
	
	var options = { };

    $.plot.plugins.push({
        init: init,
        options: options,
        name: "AreaMarkings",
        version: "0.0.4"
    });
})(jQuery);
