# AreaMarkings
Flot plugin to easily generate all kinds of oddly (or square) shaped markings on the background of the chart.

## Installation
Either copy paste the ![content](https://raw.githubusercontent.com/Xinjo/AreaMarkings/master/jquery.flot.areamarkings.js) of `jquery.flot.areamarkings.js` to a new file or ![download the file](https://github.com/Xinjo/AreaMarkings/archive/master.zip). Just add it to your `<script ...></script>` tags and make sure it loads _AFTER_ `jquery.js` and `jquery.flot.js`.  
Like this:
```
<script type="text/javascript" src="../path/to/jquery.js"></script>
<script type="text/javascript" src="../path/to/jquery.flot.js"></script>
<script type="text/javascript" src="../path/to/jquery.flot.areamarkings.js"></script>
```

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
So far the plugin _only_ supports 4 different options
___
### points
In order for the plugin to draw areas, it requires points. Just like you would use in your data series, the plugin draws from one coordinate to the next. If no points are specified, the plugin will fallback on it's default values. It also supports providing **"min"** or **"max"**, this will get the _min_ and _max_ value of the _Y_ and _X_ axis.

**Value**: _[[number, number], [number, number]]_ or _[[string, number], [number, string]_  
**Example**:  _points: [[1, 1], [1, 2], [2, 2], [2, 1]]_  or _[[0, 10], ["min", "max"]]_  
**Default**:  _null_
___
### lineColor
It's possible to give your area a nice border! The area will only have a border if you set the `lineWidth` to be 1 or higher.

**Value**: _[string]_  
**Example**:  _lineColor: "red"_ or _"rgba(100, 100, 100, 100)"_ or _"transparent"_  
**Default**:  _"black"_
___
### fillColor
You could also fill in the area using the same methods as `lineColor`, aslong as you provide it as a string object.

**Value**: _[string]_  
**Example**:  _fillColor: "blue"_ or _"rgba(50, 150, 75, 30)"_ or _"transparent"_  
**Default**:  _"black"_
___
### lineWidth
The `lineWidth` property simply displays the thickness of the border of the area. if you set the value to 0 and you also specified a `lineColor`, there will be no border.

**Value**:  _[number]_  
**Example**: _lineWidth: 2_  
**Default**:  _1_

