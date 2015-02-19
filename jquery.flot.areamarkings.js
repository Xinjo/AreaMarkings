(function ($) {
    function init(plot) {
        function drawAreaMarkings(plot, ctx) {
            var markings = plot.getOptions().grid.areaMarkings;
            if (markings) {
                $.each(markings, function (iM, eM) {
                    if (eM) {
                        var points = eM.points == null ? [] : eM.points;

                        var lw = eM.lineWidth == null ? 1 : eM.lineWidth;
                        var lc = eM.lineColor == null ? "black" : eM.lineColor;
                        var fc = eM.fillColor == null ? "black" : eM.fillColor;

                        ctx.beginPath();

                        $.each(points, function (iP, eP) {
                            var offset = plot.pointOffset({
                                x: eP[0],
                                y: eP[1]
                            });

                            ctx.lineTo(offset.left, offset.top);
                        });

                        ctx.closePath();
                        ctx.lineWidth = lw;
                        ctx.fillStyle = fc;
                        ctx.fill();
                        if (lw > 0) {
                            ctx.strokeStyle = lc;
                            ctx.stroke();
                        }
                    }
                });
            }
        }

        plot.hooks.drawBackground.push(drawAreaMarkings)
    }

    var options = {};

    $.plot.plugins.push({
        init: init,
        options: options,
        name: "AreaMarkings",
        version: "0.0.2"
    });
})(jQuery);
