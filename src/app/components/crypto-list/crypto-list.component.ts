import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/models/coin';
import { faChartLine, faMagnifyingGlass, faRankingStar, faArrowsRotate, faXmark, faFaceFrown, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
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
  colname = "";

  // --- BOOLEANS ---
  searched = false;
  isLoading = false;
  notFound = false;
  isSearching = false;
  ordered = true;

  // --- COINS ---
  coins: Coin[] = []
  searchedCoins: SearchCoin[] = []

  // --- ICONS ---
  faMagnifyingGlass = faMagnifyingGlass;
  faChartLine = faChartLine;
  faRankingStar = faRankingStar;
  faArrowsRotate = faArrowsRotate;
  faXmark = faXmark;
  faFaceFrown = faFaceFrown;
  faSortUp = faSortUp;
  faSortDown = faSortDown;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Coin[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h").subscribe((coinsList) => {
      this.coins = coinsList;
    })
  }

  refresh(): void {
    this.isLoading = true;
    this.coins = [];
    this.http.get<Coin[]>("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h").pipe(delay(1000)).subscribe((coinsList) => {
      this.coins = coinsList;
      this.isLoading = false;
      this.colname = '';
    })
  }

  search(): void {
    this.searchedCoins = [];
    this.searched = false;
    this.isSearching = true;
    this.notFound = false;
    if (this.searchCoinText.length == 0) {
      this.searched = false;
      this.searchedCoins = [];
      this.isSearching = false;
      console.log('VACÍO')
    } else {
      this.http.get<any>(`https://api.coingecko.com/api/v3/search?query=${this.searchCoinText}`).pipe(delay(1000)).subscribe((coinsList) => {
        this.searchedCoins = coinsList.coins;
        console.log(this.searchedCoins);
        this.searched = true;
        if (this.searchedCoins.length == 0) {
          this.notFound = true;
          this.searched = false;
        }
        this.isSearching = false;
      })
    }
  }

  resetSearch(): void {
    this.searchCoinText = "";
    this.searchedCoins = [];
    this.searched = false;
  }

  orderCoins(): void {
    this.ordered = !this.ordered;
    switch (this.colname) {
      case 'rank':
        this.coins.sort((c1, c2) => !this.ordered ? c1.market_cap_rank - c2.market_cap_rank : c2.market_cap_rank - c1.market_cap_rank)
        break;
      case 'symbol':
        this.coins.sort((c1, c2) => !this.ordered ? c1.symbol.localeCompare(c2.symbol) : c2.symbol.localeCompare(c1.symbol))
        break;
      case 'name':
        this.coins.sort((c1, c2) => !this.ordered ? c1.name.localeCompare(c2.name) : c2.name.localeCompare(c1.name))
        break;
      case 'price':
        this.coins.sort((c1, c2) => !this.ordered ? c1.current_price - c2.current_price : c2.current_price - c1.current_price)
        break;
      case 'market-cap':
        this.coins.sort((c1, c2) => !this.ordered ? c1.market_cap - c2.market_cap : c2.market_cap - c1.market_cap)
        break;
      case 'variation':
        this.coins.sort((c1, c2) => !this.ordered ? c1.price_change_percentage_24h_in_currency - c2.price_change_percentage_24h_in_currency : c2.price_change_percentage_24h_in_currency - c1.price_change_percentage_24h_in_currency)
        break;
    }
  }

}
