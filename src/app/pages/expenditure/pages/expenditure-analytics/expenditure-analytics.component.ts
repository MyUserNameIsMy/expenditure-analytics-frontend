import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expenditure-analytics',
  templateUrl: './expenditure-analytics.component.html',
  styleUrls: ['./expenditure-analytics.component.scss']
})
export class ExpenditureAnalyticsComponent implements OnInit {
  expenditures = [
    {
      category: '💧Назарбаева',
      date: '2023-05-23T00:15:26.270Z',
      amount: '6238.37'
    },
    {
      category: '🔆Сарыарка',
      date: '2023-02-21T12:52:24.163Z',
      amount: '7617.03'
    },
    {
      category: '💧Назарбаева',
      date: '2023-05-25T09:04:11.154Z',
      amount: '1017.66'
    },
    {
      category: '💧Сарыарка',
      date: '2023-05-19T17:05:49.206Z',
      amount: '7552.23'
    },
    {
      category: '💧Назарбаева',
      date: '2023-08-15T16:42:36.386Z',
      amount: '7346.81'
    },
    {
      category: '💧Назарбаева',
      date: '2022-09-01T00:10:33.284Z',
      amount: '6969.94'
    },
    {
      category: '💧Назарбаева',
      date: '2023-02-28T14:02:40.338Z',
      amount: '4668.78'
    },
    {
      category: '💧Назарбаева',
      date: '2022-11-02T18:21:52.915Z',
      amount: '8185.35'
    },
    {
      category: '🔆Назарбаева',
      date: '2023-04-28T17:09:54.012Z',
      amount: '9751.74'
    },
    {
      category: '🔆Сарыарка',
      date: '2022-12-26T23:45:21.253Z',
      amount: '5656.46'
    },
    {
      category: '🔆Назарбаева',
      date: '2023-06-01T10:42:34.544Z',
      amount: '1004.85'
    },
    {
      category: '💧Назарбаева',
      date: '2023-05-16T00:20:22.258Z',
      amount: '1199.96'
    },
    {
      category: '💧Назарбаева',
      date: '2023-04-07T06:47:58.279Z',
      amount: '2443.07'
    },
    {
      category: '💧Сарыарка',
      date: '2022-10-15T01:41:51.954Z',
      amount: '1729.88'
    },
    {
      category: '💧Сарыарка',
      date: '2022-11-20T03:53:10.038Z',
      amount: '7314.50'
    },
    {
      category: '💧Сарыарка',
      date: '2023-07-24T18:45:22.488Z',
      amount: '1232.48'
    },
    {
      category: '💧Назарбаева',
      date: '2023-02-10T12:25:52.904Z',
      amount: '9149.23'
    },
    {
      category: '🔆Сарыарка',
      date: '2023-04-29T20:44:34.281Z',
      amount: '9764.25'
    },
    {
      category: '🔆Назарбаева',
      date: '2023-08-27T05:07:12.592Z',
      amount: '6635.32'
    },
    {
      category: '🔆Назарбаева',
      date: '2023-02-13T01:05:38.967Z',
      amount: '7290.54'
    }
  ]

  data: any;
  options: any;
  data2: any;
  options2: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ]
    };


    this.options = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      }
    };
    
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data2 = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          yAxisID: 'y',
          tension: 0.4,
          data: [65, 59, 80, 81, 56, 55, 10]
        },
        {
          label: 'Dataset 2',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          yAxisID: 'y1',
          tension: 0.4,
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.options2 = {
      stacked: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: textColorSecondary
          },
          grid: {
            drawOnChartArea: false,
            color: surfaceBorder
          }
        }
      }
    };
  }

}
