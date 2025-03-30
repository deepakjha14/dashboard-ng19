import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from "highcharts-angular";
import Highcharts from 'highcharts';
import { SharedService } from '../../shared/shared.serice';

@Component({
  selector: 'dashboard-ng19-charts',
  imports: [ HighchartsChartModule ],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit{
  // Define an area chart using highchart 
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Area Chart'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Value'
      }
    },
    series: [{
      name: 'Series 1',
      type: 'area',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      color: '#7cb5ec',
      fillOpacity: 0.3
    }],
    credits: {
      enabled: false
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false
        }
      }
    }
  };

  chartOptionsPie: Highcharts.Options = {
    chart: {
      plotBackgroundColor: undefined,
      plotBorderWidth: undefined,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Browser Market Share 2023'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      name: 'Browsers',
      type: 'pie',
      data: [{
        name: 'Chrome',
        y: 70.67,
        sliced: true,
        selected: true
      }, {
        name: 'Edge',
        y: 14.77
      }, {
        name: 'Firefox',
        y: 4.86
      }, {
        name: 'Safari',
        y: 2.63
      }, {
        name: 'Internet Explorer',
        y: 1.53
      }, {
        name: 'Others',
        y: 5.54
      }]
    }],
    credits: {
      enabled: false
    }
  };

  constructor(private sharedService: SharedService) {}
  
  ngOnInit(): void {
    this.sharedService.getChartsData().subscribe({
      next: (data: any) => {
        this.parseData(data);
        // this.chartOptions = data;
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  parseData(data: any) {
    const months: any = [];
    const values: any = [];
    data.forEach(
      (item: any)  => {
        months.push(item.name);
        values.push(item.count);
      }
    );

    this.chartOptions.xAxis = {
      categories: months
    };

    this.chartOptions.series = [{
      name: 'Series 1',
      type: 'area',
      data: values,
      color: '#7cb5ec',
      fillOpacity: 0.3
    }];

    this.chartOptions = JSON.parse(JSON.stringify(this.chartOptions));
  }
}