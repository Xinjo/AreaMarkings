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

![Example with 2 areas](http://imgur.com/0eSugwx.png "Example with 2 areas")

## Documentation
So far the plugin _only_ supports 4 different options, but I'll definitely add more in the future!  
___
### points
In order for the plugin to draw areas, it requires points. Just like you would use in your data series, the plugin draws from one coordinate to the next. If no points are specified, the plugin will fallback on it's default values.

**Value**: _[[number, number], [number, number]]_  
**Example**:  _points: [[1, 1], [1, 2], [2, 2], [2, 1]]_  
**Default**:  _[]_
___
### lineColor
It's possible to give your area a nice border! The area will only have a border if you set the `lineWidth` to be 1 or higher.

**Value**: _[string]_  
**Example**:  _lineColor: "red" or "rgba(100, 100, 100, 100)" or "transparent"_  
**Default**:  _"black"_
___
### fillColor
You could also fill in the area using the same methods as `lineColor`, aslong as you provide it as a string object.

**Value**: _[string]_  
**Example**:  _fillColor: "blue" or "rgba(50, 150, 75, 30)" or "transparent"_  
**Default**:  _"black"_
___
### lineWidth
The `lineWidth` property simply displays the thickness of the border of the area. if you set the value to 0 and you also specified a `lineColor`, there will be no border.

**Value**:  _[number]_  
**Example**: _lineWidth: 2_  
**Default**:  _1_

