window.onload = function () {
	selectChart();
}

var radio = document.getElementByName('chart select');

function selectChart(){
	if (document.getElementById('r1').checked) {
		dessertChart();
	}
	else{
		alert
		dessertBMI();
	};
}

function dessertChart(){
	var chartDessert = new CanvasJS.Chart("chartContainer", { 
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
	chartDessert.render();
}

function dessertBMI(){
	var chartBMI = new CanvasJS.Chart("chartContainer", { 
		title: {
			text: "Monthly BMI Tracking"
		},
		axisX: {
			xValueType: "dateTime"	
		},
		axisY: {
			title: "Weight (lbs)"
		},
		data: [
		{
			type: "column",
			indexLabelLineThickness: 2,
			dataPoints: [
				  { x: new Date(2017, 00, 1), y: 198 },
				  { x: new Date(2017, 01, 1), y: 190 },
				  { x: new Date(2017, 02, 1), y: 188 },
				  { x: new Date(2017, 03, 1), y: 185 },
				  { x: new Date(2017, 04, 1), y: 180 },
				  { x: new Date(2017, 05, 1), y: 187 },
				  { x: new Date(2017, 06, 1), y: 190 },
			]
		}
		]
	});
	chartBMI.render();
}

