import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/models/coin';
import { faChartLine, faMagnifyingGlass, faRankingStar, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';
import { __awaiter } from 'tslib';
import { SearchCoin } from 'src/app/models/search-coin';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})

export class CryptoListComponent implements OnInit {

  searchCoinText = "";
  searchText = "";
  searched = false;
  isLoading = false;
  notFound = false;
  isSearching = false;

  // --- ICONS ---
  faMagnifyingGlass = faMagnifyingGlass;
  faChartLine = faChartLine;
  faRankingStar = faRankingStar;
  faArrowsRotate = faArrowsRotate;

  // coinEx1: Coin = {
  //   symbol: 'BTC',
  //   name: 'Bitcoin',
  //   current_price: 22682.69,
  //   price_change_percentage_24h_in_currency: -1.20
  // }

  // coinEx2: Coin = {
  //   symbol: 'BTC',
  //   name: 'Bitcoin',
  //   current_price: 22682.69,
  //   price_change_percentage_24h_in_currency: -1.20
  // }

  // coinEx3: Coin = {
  //   symbol: 'BTC',
  //   name: 'Bitcoin',
  //   current_price: 22682.69,
  //   price_change_percentage_24h_in_currency: -1.20
  // }

  // coinEx4: Coin = {
  //   symbol: 'BTC',
  //   name: 'Bitcoin',
  //   current_price: 22682.69,
  //   price_change_percentage_24h_in_currency: -1.20
  // }

  // coinEx5: Coin = {
  //   symbol: 'BTC',
  //   name: 'Bitcoin',
  //   current_price: 22682.69,
  //   price_change_percentage_24h_in_currency: -1.20
  // }

  // coinEx6: Coin = {
  //   symbol: 'BTC',
  //   name: 'Bitcoin',
  //   current_price: 22682.69,
  //   price_change_percentage_24h_in_currency: -1.20
  // }

  // coins: Coin[] = [
  //   this.coinEx1,
  //   this.coinEx2,
  //   this.coinEx3,
  //   this.coinEx4,
  //   this.coinEx5,
  //   this.coinEx6
  // ];

  coins: Coin[] = []
  searchedCoins: SearchCoin[] = []

  constructor(private http: HttpClient) { }

  apiKey = "EDCCBCB1-1781-4CD1-9CC2-BBCD54F560B0"

  ngOnInit(): void {
    this.http.get<Coin[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h").subscribe((coinsList) => {
      this.coins = coinsList;
    })
  }

  refresh(): void{
    this.isLoading = true;
    this.coins = [];
    this.http.get<Coin[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h").pipe(delay(1000)).subscribe((coinsList) => {
      this.coins = coinsList;
      this.isLoading = false;
    })
  }

  search(): void{
    this.isSearching = true;
    this.notFound = false;
    if(this.searchCoinText.length==0){
      this.searched = false;
      this.searchedCoins = [];
      this.isSearching = false;
      console.log('VACÍO')
    }else{
      this.http.get<any>(`https://api.coingecko.com/api/v3/search?query=${this.searchCoinText}`).pipe(delay(1000)).subscribe((coinsList) => {
        this.searchedCoins = coinsList.coins;
        console.log(this.searchedCoins);
        this.searched = true;
        if(this.searchedCoins.length==0){
          this.notFound = true;
          this.searched = false;
        }
        this.isSearching = false;
      })
    }
  }

}
