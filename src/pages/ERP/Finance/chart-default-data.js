const donutdata = {
    series: [45, 20, 35],
    // labels: ['Product 1', 'Product 2', 'Product 3'],
    options: {
      title: {
        text: 'Product Analytics',
        align: 'left',
        margin: 10,
        style: {
          fontSize:  '16px',
          fontWeight:  'bold',
          fontFamily:  'Lato',
          color:  '#82567A'
        },
      },
      chart: {
        type: 'donut',
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: 'right',
        horizontalAlign: 'center',
      },
      plotOptions: {
        pie: {
          donut: {
            size: '50%'
          }
        }
      },
      responsive: [{
        breakpoint: 600,
        options: {},
      }],
      colors: ['#833675', '#DCDCDC', '#865A7E'],
    },
  }

  const linedata = {
    series:[{
      data: [6500, 7500, 6200, 6500, 2200, 6000, 3999, 6200, 1000, 1000, 4300],
    }],
    options: {
      xaxis:{
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"],
      },
      tooltip: {
        enabled: false,
      },
      colors: ['#833675'],
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        text: 'Product Yearly Price Scale Chart',
        align: 'left',
        margin: 10,
        style: {
          fontSize:  '16px',
          fontWeight:  'bold',
          fontFamily:  'Lato',
          color:  '#82567A'
        },
      },
    }
  }

  export default {donutdata,linedata};