const ColumnChart = function(series) {

  const container = document.querySelector("#column-chart");
    const chart = new Highcharts.Chart({ //NEW
      chart: {
        type: 'column',
        renderTo: container
      },
      title: {
        text: "Characters by House"
      },

      series: series,

      xAxis: { //NEW
        title: {
          text:"House"
        },
        tickInterval: 1,
        min: 1
      }


  })

}
