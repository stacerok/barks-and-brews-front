jQuery(document).ready(function(){
  'use strict';

//============================== FLOAT CHART =========================
  $(document).ready(function() {

    var data2 = [
    [gd(2012, 1, 1), 7], [gd(2012, 1, 2), 6], [gd(2012, 1, 3), 4], [gd(2012, 1, 4), 8],
    [gd(2012, 1, 5), 9], [gd(2012, 1, 6), 7], [gd(2012, 1, 7), 5], [gd(2012, 1, 8), 4],
    [gd(2012, 1, 9), 7], [gd(2012, 1, 10), 8], [gd(2012, 1, 11), 9], [gd(2012, 1, 12), 6],
    [gd(2012, 1, 13), 4], [gd(2012, 1, 14), 5], [gd(2012, 1, 15), 11], [gd(2012, 1, 16), 8],
    [gd(2012, 1, 17), 8], [gd(2012, 1, 18), 11], [gd(2012, 1, 19), 11], [gd(2012, 1, 20), 6],
    [gd(2012, 1, 21), 6], [gd(2012, 1, 22), 8], [gd(2012, 1, 23), 11], [gd(2012, 1, 24), 13],
    [gd(2012, 1, 25), 7], [gd(2012, 1, 26), 9], [gd(2012, 1, 27), 9], [gd(2012, 1, 28), 8],
    [gd(2012, 1, 29), 5], [gd(2012, 1, 30), 8], [gd(2012, 1, 31), 25]
    ];

    var data3 = [
    [gd(2012, 1, 1), 800], [gd(2012, 1, 2), 500], [gd(2012, 1, 3), 600], [gd(2012, 1, 4), 700],
    [gd(2012, 1, 5), 500], [gd(2012, 1, 6), 456], [gd(2012, 1, 7), 800], [gd(2012, 1, 8), 589],
    [gd(2012, 1, 9), 467], [gd(2012, 1, 10), 876], [gd(2012, 1, 11), 689], [gd(2012, 1, 12), 700],
    [gd(2012, 1, 13), 500], [gd(2012, 1, 14), 600], [gd(2012, 1, 15), 700], [gd(2012, 1, 16), 786],
    [gd(2012, 1, 17), 345], [gd(2012, 1, 18), 888], [gd(2012, 1, 19), 888], [gd(2012, 1, 20), 888],
    [gd(2012, 1, 21), 987], [gd(2012, 1, 22), 444], [gd(2012, 1, 23), 999], [gd(2012, 1, 24), 567],
    [gd(2012, 1, 25), 786], [gd(2012, 1, 26), 666], [gd(2012, 1, 27), 888], [gd(2012, 1, 28), 900],
    [gd(2012, 1, 29), 178], [gd(2012, 1, 30), 555], [gd(2012, 1, 31), 993]
    ];


    var dataset = [
    {
      label: "Number of orders",
      data: data3,
      color: "#e5e5e5",
      bars: {
        show: true,
        align: "center",
        barWidth: 24 * 60 * 60 * 600,
        lineWidth:0,
        fillColor: {
          colors: [{
            opacity: .5
          }, {
            opacity: 1
          }]
        }
      }

    }, {
      label: "Payments",
      data: data2,
      yaxis: 2,
      color: "#2196f3",
      lines: {
        lineWidth:1,
        show: true,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.2
          }, {
            opacity: 0.4
          }]
        }
      },
      splines: {
        show: false,
        tension: 0.6,
        lineWidth: 1,
        fill: 0.1
      },
    }
    ];


    var options = {
      xaxis: {
        mode: "time",
        tickSize: [3, "day"],
        tickLength: 0,
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 10,
        color: "#d5d5d5"
      },
      yaxes: [{
        position: "left",
        max: 1070,
        color: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Arial',
        axisLabelPadding: 3
      }, {
        position: "right",
        clolor: "#d5d5d5",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: ' Arial',
        axisLabelPadding: 67
      }
      ],
      legend: {
        noColumns: 1,
        labelBoxBorderColor: "#000000",
        position: "nw"
      },
      grid: {
        hoverable: false,
        borderWidth: 0
      }
    };

    function gd(year, month, day) {
      return new Date(year, month - 1, day).getTime();
    }

    var flotDashboardChart = $('#flot-dashboard-chart');
    if (flotDashboardChart.length !== 0){
      $.plot(flotDashboardChart, dataset, options);

    }

    /*======== 10.1 LINE CHART 01 ========*/
  var lineChart1 = document.querySelector("#line-chart-1");
  if (lineChart1 !== null) {
    var lineChartOption1 = {
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false
        },
      },
      stroke: {
        width: [2, 3],
        curve: 'smooth',
        dashArray: [0, 5]
      },
      plotOptions: {
        horizontal: false,
      },
      colors: ['#22baa0', '#fec400'],
      series: [{
        data: [6, 10, 8, 20, 15, 6, 21]
      }, {
        data: [8, 6, 15, 10, 25, 8, 32]
      }],
      labels: ['04 jan', '05 jan', '06 jan', '07 jan', '08 jan', '09 jan', '10 jan'],
      markers: {
        size: [5, 0]
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false
        }
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: (labels) => labels,
          },
        },
        marker: {
          show: true,
        },
      },
      legend: {
        show: false
      },
    }
    var randerLineChart1 = new ApexCharts(lineChart1, lineChartOption1);
    randerLineChart1.render();
  }

  });

});
