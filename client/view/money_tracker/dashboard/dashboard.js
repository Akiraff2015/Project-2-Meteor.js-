import Chart from 'chart.js';

Template.mt_dashboard.rendered = function() {
	var ctx = $("#chartLineGraph");
	var ctx2 = $("#chartPieGraph");

	//Line Graph
	// TODO --> generate dynamic content
	var chartLineGraph = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6"],
			datasets: [{
				label: 'Daily Money Spent',
				data: [238.90, 192.70, 75.00, 177.20, 141.90, 211.50],

				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],

				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],

				borderWidth: 1
				}]
		},

		options: {
			responsive: false,
			scales: {
				yAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Total Money Spent Per Day'
					},

					ticks: {
						beginAtZero:true
					},
				}],
				xAxes: [{
					scaleLabel: {
						display: true,
						labelString: 'Day of the Month'
					}
				}]
			}
		}
	});

	var chartPieGraph = new Chart(ctx2, {
		type: 'pie',
		label: "Payment Distribution",
		data: {
			labels: ["Cash", "MasterCard", "Other"],
			datasets: [{
				label: 'Daily Money Spent',
				data: [300, 50, 100],
				backgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56"
				],
				hoverBackgroundColor: [
					"#FF6384",
					"#36A2EB",
					"#FFCE56"
				]
			}]
		}
	});
}
