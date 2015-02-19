/** AreaMarkings plugin for Flot
 * https://github.com/kcdr/flot-autoMarkings/edit/master/README.md
 * 
 * Copyright (c) 2015 Xinjo/Michel de Nijs
 * 
 * Licensed under the MIT license.
 * 
 * Version v0.0.1
 * 
 */
 
(function ($) {
    function init(plot) {		
		var markings = [];
		
		function getConfig(plot, options) {
			markings = plot.getOptions().grid.areaMarkings;
		}
		
		function drawAreaMarkings(plot, ctx) {	
			if(markings) {
				$.each(markings, function(index, element) {
					if(element) {
						var tl = plot.pointOffset( { x: element.topLeft[0], y: element.topLeft[1] } );
						var tr = plot.pointOffset( { x: element.topRight[0], y: element.topRight[1] } );
						var br = plot.pointOffset( { x: element.bottomRight[0], y: element.bottomRight[1] } );
						var bl = plot.pointOffset( { x: element.bottomLeft[0], y: element.bottomLeft[1] } );
						
						ctx.beginPath();
						ctx.lineWidth = element.lineWidth;
						ctx.rect(tl.left, tl.top, tr.left - tl.left, bl.top - tl.top);
						ctx.fillStyle = element.fillColor;
						ctx.fill();
						ctx.strokeStyle = element.lineColor;
						ctx.stroke();
					}
				});
			}
		}
		
		plot.hooks.processOptions.push(getConfig);
		plot.hooks.drawBackground.push(drawAreaMarkings)
    }
	
	var options = { };

    $.plot.plugins.push({
        init: init,
        options: options,
        name: "AreaMarkings",
        version: "0.0.1"
    });
})(jQuery);
