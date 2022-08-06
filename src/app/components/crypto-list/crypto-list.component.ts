import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/models/coin';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  coinEx1: Coin = {
    initials: 'ABC',
    name: 'Incredible Crypto',
    price: 13.4,
    variation: -1.20
  }

  coinEx2: Coin = {
    initials: 'ABC',
    name: 'Incredible Crypto',
    price: 13.4,
    variation: 0.42
  }

  coinEx3: Coin = {
    initials: 'ABC',
    name: 'Incredible Crypto',
    price: 13.4,
    variation: -0.01
  }

  coinEx4: Coin = {
    initials: 'ABC',
    name: 'Incredible Crypto',
    price: 13.4,
    variation: 0.00
  }

  coinEx5: Coin = {
    initials: 'ABC',
    name: 'Incredible Crypto',
    price: 13.4,
    variation: 1.28
  }

  coinEx6: Coin = {
    initials: 'ABC',
    name: 'Incredible Crypto',
    price: 13.4,
    variation: 13.02
  }

  coins: Coin[] = [
    this.coinEx1,
    this.coinEx2,
    this.coinEx3,
    this.coinEx4,
    this.coinEx5,
    this.coinEx6
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
