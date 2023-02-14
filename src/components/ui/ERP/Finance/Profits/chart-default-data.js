const barchart = {
  series: [
    {
      name: "Series",
      data: [481, 349, 231, 881, 327, 304, 576],
    },
  ],
  options: {
    xaxis: {
      type: "category",
      categories: ["2005", "2006", "2007", "2008", "2009", "2010", "2011"],
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      "#82567A",
      "#F56B3F",
      "#82567A",
      "#F56B3F",
      "#82567A",
      "#F56B3F",
      "#82567A",
    ],
    plotOptions: {
      bar: {
        distributed: true,
        rangeBarGroupRows: false,
      },
    },
    legend: {
      show: false,
    },
  },
};

export default barchart;
