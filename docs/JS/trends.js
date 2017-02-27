window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", { 
		title: {
			text: "Calorie Consumption Chart"
		},
		axisX: {
			xValueType: "dateTime"	
		},
		axisY: {
			title: "Calories Consumed"
		},
		data: [
		{
			type: "column",
			indexLabelLineThickness: 2,
			dataPoints: [
				  { x: new Date(2017, 01, 19), y: 230 },
				  { x: new Date(2017, 01, 20), y: 710 },
				  { x: new Date(2017, 01, 21), y: 380 },
				  { x: new Date(2017, 01, 22), y: 567 },
				  { x: new Date(2017, 01, 23), y: 280 },
				  { x: new Date(2017, 01, 24), y: 507 },
				  { x: new Date(2017, 01, 25), y: 680 },
			]
		}
		]
	});
	chart.render();	

	$("#addDataPoint").click(function () {

	var length = chart.options.data[0].dataPoints.length;
	chart.options.title.text = "New DataPoint Added at the end";
	chart.options.data[0].dataPoints.push({ y: 25 - Math.random() * 10});
	chart.render();

	});

	$("#updateDataPoint").click(function () {

	var length = chart.options.data[0].dataPoints.length;
	chart.options.title.text = "Last DataPoint Updated";
	chart.options.data[0].dataPoints[length-1].y = 15 - Math.random() * 10;
	chart.render();

	});





}