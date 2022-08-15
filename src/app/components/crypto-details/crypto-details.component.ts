import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';
import { R3TargetBinder } from '@angular/compiler';
import { Coin } from 'src/app/models/coin';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

  crypto: Coin = {
    id: 'string',
    image: 'string',
    symbol: 'string',
    name: 'string',
    current_price: 0,
    market_cap: 0,
    price_change_percentage_24h_in_currency: 0,
    market_cap_rank: 0
  };

  sampleData: any = [];

  prices: number[] = [];
  maxPrice = 100000;
  minPrice = 0;

  padding: any = { left: 20, top: 5, right: 20, bottom: 20 };

  titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

  backgroundColor: any = 'rgb(34, 34, 34)';
  borderLineColor: any = 'rgb(34, 34, 34)';

  xAxis: any = {};

  valueAxis: any = {};

  seriesGroups: any[] = [];

  constructor(private location: Location, private http: HttpClient) { }


  ngOnInit(): void {
    this.crypto = (this.location.getState() as any);
    if(this.crypto.id != undefined){
      localStorage.setItem('coin', JSON.stringify(this.crypto))
    }else{
      this.crypto = JSON.parse(localStorage.getItem('coin')!);
    }
    console.log('storage: ' + (JSON.parse(localStorage.getItem('coin')!)).id);
    // GET LIST OF PRICES
    this.http.get(`https://api.coingecko.com/api/v3/coins/${this.crypto.id}/market_chart?vs_currency=usd&days=45&interval=daily`).subscribe((data: any) => {
      let lista: any[] = data.prices;
      lista.forEach(a => {
        this.prices.push(a[1]);
      });

      this.maxPrice = Math.max(...this.prices);
      this.minPrice = Math.min(...this.prices);
      this.sampleData =
        [
          { Crypto: `${this.crypto.name}`, Price: this.prices[0] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[1] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[2] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[3] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[4] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[5] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[6] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[7] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[8] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[9] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[10] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[11] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[12] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[13] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[14] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[15] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[16] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[17] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[18] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[19] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[20] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[21] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[22] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[23] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[24] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[25] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[26] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[27] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[28] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[29] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[30] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[31] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[32] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[33] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[34] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[35] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[36] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[37] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[38] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[39] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[40] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[41] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[42] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[43] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[44] },
          { Crypto: `${this.crypto.name}`, Price: this.prices[45] },
        ];

      this.padding = { left: 20, top: 5, right: 20, bottom: 20 };

      this.titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

      this.backgroundColor = 'rgb(34, 34, 34)'
      this.borderLineColor = 'rgb(34, 34, 34)'

      this.xAxis =
      {
        dataField: 'Crypto',
        showGridLines: false,
        showLabels: false,
        flip: false
      };

      this.valueAxis =
      {
        flip: false,
        showGridLines: false,
        toolTipFormatSettings: { thousandsSeparator: ',', decimalPlaces: this.crypto.current_price < 1 ? 8 : 3 },
        labels: {
          visible: false,
          // formatFunction: (value: string) => {
          //   return parseInt(value);
          // }
        }
      };

      this.seriesGroups =
        [
          {
            type: 'line',
            orientation: 'vertical',
            columnsGapPercent: 50,
            toolTipFormatSettings: { thousandsSeparator: ',', decimalPlaces: this.crypto.current_price < 1 ? 8 : 3 },
            valueAxis:
            {
              unitInterval: this.crypto.current_price >= 1 && this.crypto.current_price < 1.005 ? 0.050000000 : 0,
              decimalPlaces: this.crypto.current_price < 1 ? 8 : 3,
              minValue: this.minPrice,
              maxValue: this.maxPrice,
              displayValueAxis: true,
              showGridLines: false,
              showLabels: false,
              // description: 'Daily Closing Price',
              axisSize: 'auto',
              tickMarksColor: '#888888'
            },
            series: [
              { dataField: 'Price', displayText: 'Price' }
            ]
          }
        ];
    })

  }

}
