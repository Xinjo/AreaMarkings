# AreaMarkings
Flot plugin to easily generate all kinds of oddly (or square) shaped markings on the background of the chart.

## Usage
In order for this plugin to function properly, all you have to do is add the `areaMarkings` to the `grid` object. It is possible to draw more than 1 area, all you have to do is add another object to the array!

Example with 2 areas:
```
grid: {
    ....
    areaMarkings: [{
			points: [[10, 10], [10, 15], [20, 15], [20, 10]],
			lineColor: "red",
			fillColor: "blue",
			lineWidth: 2
		}, {
			points: [[30, 30], [30, 35], [35, 35], [35, 30]],
			lineColor: "blue",
			fillColor: "red",
			lineWidth: 10
		}]
		....
	}
```


## Documentation
So far the plugin _only_ supports 4 different options, but I'll definitely add more in the future!  
___
### points
In order for the plugin to draw areas, it requires points. Just like you would use in your data series, the plugin draws from one coordinate to the next. If no points are specified, the plugin will fallback on it's default values.

**Value**:  _[[x, y], [x, y]]_  
**Default**:  _[]_
___
### lineColor
It's possible to give your area a nice border! 

**Value**:  _"red" or "rgba(100, 100, 100, 100)"_  
**Default**:  _"black"_


