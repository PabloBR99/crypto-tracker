import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';
import { R3TargetBinder, ThisReceiver } from '@angular/compiler';
import { Coin } from 'src/app/models/coin';
import { HttpClient } from '@angular/common/http';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.css']
})
export class CryptoDetailsComponent implements OnInit {

  faArrowsRotate = faArrowsRotate;

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
  sampleDataCopy: any = [];

  prices: number[] = [];
  prices24h: number[] = [];
  maxPrice = 100000;
  minPrice = 0;
  description = '';
  variation24 = 0;
  variation7d = 0;
  largeImg = '';
  genesis_date = '';
  total_volume = 0;
  high_24h = 0;
  low_24h = 0;
  likes = 0;
  dislikes = 0;
  total_supply = 0;
  max_supply = 0;
  circulating_supply = 0;
  homepage = '';
  scale = '24h';

  padding: any = { left: 20, top: 5, right: 20, bottom: 20 };

  titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

  backgroundColor: any = 'rgb(34, 34, 34)';
  borderLineColor: any = 'rgb(34, 34, 34)';

  xAxis: any = {};

  valueAxis: any = {};

  seriesGroups: any[] = [];

  constructor(private location: Location, private http: HttpClient) { }

  changeChart(newScale: string): void {
    if(newScale.localeCompare('24h') != 0){
      this.http.get(`https://api.coingecko.com/api/v3/coins/${this.crypto.id}/market_chart?vs_currency=usd&days=365&interval=daily`).subscribe((data: any) => {
      let lista: any[] = data.prices;
      this.prices = [];
      lista.forEach(a => {
        this.prices.push(a[1]);
      });

      this.sampleDataCopy =
        [
          { Date: this.getDateFromDays(364), Price: this.prices[0] },
          { Date: this.getDateFromDays(363), Price: this.prices[1] },
          { Date: this.getDateFromDays(362), Price: this.prices[2] },
          { Date: this.getDateFromDays(361), Price: this.prices[3] },
          { Date: this.getDateFromDays(360), Price: this.prices[4] },
          { Date: this.getDateFromDays(359), Price: this.prices[5] },
          { Date: this.getDateFromDays(358), Price: this.prices[6] },
          { Date: this.getDateFromDays(357), Price: this.prices[7] },
          { Date: this.getDateFromDays(356), Price: this.prices[8] },
          { Date: this.getDateFromDays(355), Price: this.prices[9] },
          { Date: this.getDateFromDays(354), Price: this.prices[10] },
          { Date: this.getDateFromDays(353), Price: this.prices[11] },
          { Date: this.getDateFromDays(352), Price: this.prices[12] },
          { Date: this.getDateFromDays(351), Price: this.prices[13] },
          { Date: this.getDateFromDays(350), Price: this.prices[14] },
          { Date: this.getDateFromDays(349), Price: this.prices[15] },
          { Date: this.getDateFromDays(348), Price: this.prices[16] },
          { Date: this.getDateFromDays(347), Price: this.prices[17] },
          { Date: this.getDateFromDays(346), Price: this.prices[18] },
          { Date: this.getDateFromDays(345), Price: this.prices[19] },
          { Date: this.getDateFromDays(344), Price: this.prices[20] },
          { Date: this.getDateFromDays(343), Price: this.prices[21] },
          { Date: this.getDateFromDays(342), Price: this.prices[22] },
          { Date: this.getDateFromDays(341), Price: this.prices[23] },
          { Date: this.getDateFromDays(340), Price: this.prices[24] },
          { Date: this.getDateFromDays(339), Price: this.prices[25] },
          { Date: this.getDateFromDays(338), Price: this.prices[26] },
          { Date: this.getDateFromDays(337), Price: this.prices[27] },
          { Date: this.getDateFromDays(336), Price: this.prices[28] },
          { Date: this.getDateFromDays(335), Price: this.prices[29] },
          { Date: this.getDateFromDays(334), Price: this.prices[30] },
          { Date: this.getDateFromDays(333), Price: this.prices[31] },
          { Date: this.getDateFromDays(332), Price: this.prices[32] },
          { Date: this.getDateFromDays(331), Price: this.prices[33] },
          { Date: this.getDateFromDays(330), Price: this.prices[34] },
          { Date: this.getDateFromDays(329), Price: this.prices[35] },
          { Date: this.getDateFromDays(328), Price: this.prices[36] },
          { Date: this.getDateFromDays(327), Price: this.prices[37] },
          { Date: this.getDateFromDays(326), Price: this.prices[38] },
          { Date: this.getDateFromDays(325), Price: this.prices[39] },
          { Date: this.getDateFromDays(324), Price: this.prices[40] },
          { Date: this.getDateFromDays(323), Price: this.prices[41] },
          { Date: this.getDateFromDays(322), Price: this.prices[42] },
          { Date: this.getDateFromDays(321), Price: this.prices[43] },
          { Date: this.getDateFromDays(320), Price: this.prices[44] },
          { Date: this.getDateFromDays(319), Price: this.prices[45] },
          { Date: this.getDateFromDays(318), Price: this.prices[46] },
          { Date: this.getDateFromDays(317), Price: this.prices[47] },
          { Date: this.getDateFromDays(316), Price: this.prices[48] },
          { Date: this.getDateFromDays(315), Price: this.prices[49] },
          { Date: this.getDateFromDays(314), Price: this.prices[50] },
          { Date: this.getDateFromDays(313), Price: this.prices[51] },
          { Date: this.getDateFromDays(312), Price: this.prices[52] },
          { Date: this.getDateFromDays(311), Price: this.prices[53] },
          { Date: this.getDateFromDays(310), Price: this.prices[54] },
          { Date: this.getDateFromDays(309), Price: this.prices[55] },
          { Date: this.getDateFromDays(308), Price: this.prices[56] },
          { Date: this.getDateFromDays(307), Price: this.prices[57] },
          { Date: this.getDateFromDays(306), Price: this.prices[58] },
          { Date: this.getDateFromDays(305), Price: this.prices[59] },
          { Date: this.getDateFromDays(304), Price: this.prices[60] },
          { Date: this.getDateFromDays(303), Price: this.prices[61] },
          { Date: this.getDateFromDays(302), Price: this.prices[62] },
          { Date: this.getDateFromDays(301), Price: this.prices[63] },
          { Date: this.getDateFromDays(300), Price: this.prices[64] },
          { Date: this.getDateFromDays(299), Price: this.prices[65] },
          { Date: this.getDateFromDays(298), Price: this.prices[66] },
          { Date: this.getDateFromDays(297), Price: this.prices[67] },
          { Date: this.getDateFromDays(296), Price: this.prices[68] },
          { Date: this.getDateFromDays(295), Price: this.prices[69] },
          { Date: this.getDateFromDays(294), Price: this.prices[70] },
          { Date: this.getDateFromDays(293), Price: this.prices[71] },
          { Date: this.getDateFromDays(292), Price: this.prices[72] },
          { Date: this.getDateFromDays(291), Price: this.prices[73] },
          { Date: this.getDateFromDays(290), Price: this.prices[74] },
          { Date: this.getDateFromDays(289), Price: this.prices[75] },
          { Date: this.getDateFromDays(288), Price: this.prices[76] },
          { Date: this.getDateFromDays(287), Price: this.prices[77] },
          { Date: this.getDateFromDays(286), Price: this.prices[78] },
          { Date: this.getDateFromDays(285), Price: this.prices[79] },
          { Date: this.getDateFromDays(284), Price: this.prices[80] },
          { Date: this.getDateFromDays(283), Price: this.prices[81] },
          { Date: this.getDateFromDays(282), Price: this.prices[82] },
          { Date: this.getDateFromDays(281), Price: this.prices[83] },
          { Date: this.getDateFromDays(280), Price: this.prices[84] },
          { Date: this.getDateFromDays(279), Price: this.prices[85] },
          { Date: this.getDateFromDays(278), Price: this.prices[86] },
          { Date: this.getDateFromDays(277), Price: this.prices[87] },
          { Date: this.getDateFromDays(276), Price: this.prices[88] },
          { Date: this.getDateFromDays(275), Price: this.prices[89] },
          { Date: this.getDateFromDays(274), Price: this.prices[90] },
          { Date: this.getDateFromDays(273), Price: this.prices[91] },
          { Date: this.getDateFromDays(272), Price: this.prices[92] },
          { Date: this.getDateFromDays(271), Price: this.prices[93] },
          { Date: this.getDateFromDays(270), Price: this.prices[94] },
          { Date: this.getDateFromDays(269), Price: this.prices[95] },
          { Date: this.getDateFromDays(268), Price: this.prices[96] },
          { Date: this.getDateFromDays(267), Price: this.prices[97] },
          { Date: this.getDateFromDays(266), Price: this.prices[98] },
          { Date: this.getDateFromDays(265), Price: this.prices[99] },
          { Date: this.getDateFromDays(264), Price: this.prices[100] },
          { Date: this.getDateFromDays(263), Price: this.prices[101] },
          { Date: this.getDateFromDays(262), Price: this.prices[102] },
          { Date: this.getDateFromDays(261), Price: this.prices[103] },
          { Date: this.getDateFromDays(260), Price: this.prices[104] },
          { Date: this.getDateFromDays(259), Price: this.prices[105] },
          { Date: this.getDateFromDays(258), Price: this.prices[106] },
          { Date: this.getDateFromDays(257), Price: this.prices[107] },
          { Date: this.getDateFromDays(256), Price: this.prices[108] },
          { Date: this.getDateFromDays(255), Price: this.prices[109] },
          { Date: this.getDateFromDays(254), Price: this.prices[110] },
          { Date: this.getDateFromDays(253), Price: this.prices[111] },
          { Date: this.getDateFromDays(252), Price: this.prices[112] },
          { Date: this.getDateFromDays(251), Price: this.prices[113] },
          { Date: this.getDateFromDays(250), Price: this.prices[114] },
          { Date: this.getDateFromDays(249), Price: this.prices[115] },
          { Date: this.getDateFromDays(248), Price: this.prices[116] },
          { Date: this.getDateFromDays(247), Price: this.prices[117] },
          { Date: this.getDateFromDays(246), Price: this.prices[118] },
          { Date: this.getDateFromDays(245), Price: this.prices[119] },
          { Date: this.getDateFromDays(244), Price: this.prices[120] },
          { Date: this.getDateFromDays(243), Price: this.prices[121] },
          { Date: this.getDateFromDays(242), Price: this.prices[122] },
          { Date: this.getDateFromDays(241), Price: this.prices[123] },
          { Date: this.getDateFromDays(240), Price: this.prices[124] },
          { Date: this.getDateFromDays(239), Price: this.prices[125] },
          { Date: this.getDateFromDays(238), Price: this.prices[126] },
          { Date: this.getDateFromDays(237), Price: this.prices[127] },
          { Date: this.getDateFromDays(236), Price: this.prices[128] },
          { Date: this.getDateFromDays(235), Price: this.prices[129] },
          { Date: this.getDateFromDays(234), Price: this.prices[130] },
          { Date: this.getDateFromDays(233), Price: this.prices[131] },
          { Date: this.getDateFromDays(232), Price: this.prices[132] },
          { Date: this.getDateFromDays(231), Price: this.prices[133] },
          { Date: this.getDateFromDays(230), Price: this.prices[134] },
          { Date: this.getDateFromDays(229), Price: this.prices[135] },
          { Date: this.getDateFromDays(228), Price: this.prices[136] },
          { Date: this.getDateFromDays(227), Price: this.prices[137] },
          { Date: this.getDateFromDays(226), Price: this.prices[138] },
          { Date: this.getDateFromDays(225), Price: this.prices[139] },
          { Date: this.getDateFromDays(224), Price: this.prices[140] },
          { Date: this.getDateFromDays(223), Price: this.prices[141] },
          { Date: this.getDateFromDays(222), Price: this.prices[142] },
          { Date: this.getDateFromDays(221), Price: this.prices[143] },
          { Date: this.getDateFromDays(220), Price: this.prices[144] },
          { Date: this.getDateFromDays(219), Price: this.prices[145] },
          { Date: this.getDateFromDays(218), Price: this.prices[146] },
          { Date: this.getDateFromDays(217), Price: this.prices[147] },
          { Date: this.getDateFromDays(216), Price: this.prices[148] },
          { Date: this.getDateFromDays(215), Price: this.prices[149] },
          { Date: this.getDateFromDays(214), Price: this.prices[150] },
          { Date: this.getDateFromDays(213), Price: this.prices[151] },
          { Date: this.getDateFromDays(212), Price: this.prices[152] },
          { Date: this.getDateFromDays(211), Price: this.prices[153] },
          { Date: this.getDateFromDays(210), Price: this.prices[154] },
          { Date: this.getDateFromDays(209), Price: this.prices[155] },
          { Date: this.getDateFromDays(208), Price: this.prices[156] },
          { Date: this.getDateFromDays(207), Price: this.prices[157] },
          { Date: this.getDateFromDays(206), Price: this.prices[158] },
          { Date: this.getDateFromDays(205), Price: this.prices[159] },
          { Date: this.getDateFromDays(204), Price: this.prices[160] },
          { Date: this.getDateFromDays(203), Price: this.prices[161] },
          { Date: this.getDateFromDays(202), Price: this.prices[162] },
          { Date: this.getDateFromDays(201), Price: this.prices[163] },
          { Date: this.getDateFromDays(200), Price: this.prices[164] },
          { Date: this.getDateFromDays(199), Price: this.prices[165] },
          { Date: this.getDateFromDays(198), Price: this.prices[166] },
          { Date: this.getDateFromDays(197), Price: this.prices[167] },
          { Date: this.getDateFromDays(196), Price: this.prices[168] },
          { Date: this.getDateFromDays(195), Price: this.prices[169] },
          { Date: this.getDateFromDays(194), Price: this.prices[170] },
          { Date: this.getDateFromDays(193), Price: this.prices[171] },
          { Date: this.getDateFromDays(192), Price: this.prices[172] },
          { Date: this.getDateFromDays(191), Price: this.prices[173] },
          { Date: this.getDateFromDays(190), Price: this.prices[174] },
          { Date: this.getDateFromDays(189), Price: this.prices[175] },
          { Date: this.getDateFromDays(188), Price: this.prices[176] },
          { Date: this.getDateFromDays(187), Price: this.prices[177] },
          { Date: this.getDateFromDays(186), Price: this.prices[178] },
          { Date: this.getDateFromDays(185), Price: this.prices[179] },
          { Date: this.getDateFromDays(184), Price: this.prices[180] },
          { Date: this.getDateFromDays(183), Price: this.prices[181] },
          { Date: this.getDateFromDays(182), Price: this.prices[182] },
          { Date: this.getDateFromDays(181), Price: this.prices[183] },
          { Date: this.getDateFromDays(180), Price: this.prices[184] },
          { Date: this.getDateFromDays(179), Price: this.prices[185] },
          { Date: this.getDateFromDays(178), Price: this.prices[186] },
          { Date: this.getDateFromDays(177), Price: this.prices[187] },
          { Date: this.getDateFromDays(176), Price: this.prices[188] },
          { Date: this.getDateFromDays(175), Price: this.prices[189] },
          { Date: this.getDateFromDays(174), Price: this.prices[190] },
          { Date: this.getDateFromDays(173), Price: this.prices[191] },
          { Date: this.getDateFromDays(172), Price: this.prices[192] },
          { Date: this.getDateFromDays(171), Price: this.prices[193] },
          { Date: this.getDateFromDays(170), Price: this.prices[194] },
          { Date: this.getDateFromDays(169), Price: this.prices[195] },
          { Date: this.getDateFromDays(168), Price: this.prices[196] },
          { Date: this.getDateFromDays(167), Price: this.prices[197] },
          { Date: this.getDateFromDays(166), Price: this.prices[198] },
          { Date: this.getDateFromDays(165), Price: this.prices[199] },
          { Date: this.getDateFromDays(164), Price: this.prices[200] },
          { Date: this.getDateFromDays(163), Price: this.prices[201] },
          { Date: this.getDateFromDays(162), Price: this.prices[202] },
          { Date: this.getDateFromDays(161), Price: this.prices[203] },
          { Date: this.getDateFromDays(160), Price: this.prices[204] },
          { Date: this.getDateFromDays(159), Price: this.prices[205] },
          { Date: this.getDateFromDays(158), Price: this.prices[206] },
          { Date: this.getDateFromDays(157), Price: this.prices[207] },
          { Date: this.getDateFromDays(156), Price: this.prices[208] },
          { Date: this.getDateFromDays(155), Price: this.prices[209] },
          { Date: this.getDateFromDays(154), Price: this.prices[210] },
          { Date: this.getDateFromDays(153), Price: this.prices[211] },
          { Date: this.getDateFromDays(152), Price: this.prices[212] },
          { Date: this.getDateFromDays(151), Price: this.prices[213] },
          { Date: this.getDateFromDays(150), Price: this.prices[214] },
          { Date: this.getDateFromDays(149), Price: this.prices[215] },
          { Date: this.getDateFromDays(148), Price: this.prices[216] },
          { Date: this.getDateFromDays(147), Price: this.prices[217] },
          { Date: this.getDateFromDays(146), Price: this.prices[218] },
          { Date: this.getDateFromDays(145), Price: this.prices[219] },
          { Date: this.getDateFromDays(144), Price: this.prices[220] },
          { Date: this.getDateFromDays(143), Price: this.prices[221] },
          { Date: this.getDateFromDays(142), Price: this.prices[222] },
          { Date: this.getDateFromDays(141), Price: this.prices[223] },
          { Date: this.getDateFromDays(140), Price: this.prices[224] },
          { Date: this.getDateFromDays(139), Price: this.prices[225] },
          { Date: this.getDateFromDays(138), Price: this.prices[226] },
          { Date: this.getDateFromDays(137), Price: this.prices[227] },
          { Date: this.getDateFromDays(136), Price: this.prices[228] },
          { Date: this.getDateFromDays(135), Price: this.prices[229] },
          { Date: this.getDateFromDays(134), Price: this.prices[230] },
          { Date: this.getDateFromDays(133), Price: this.prices[231] },
          { Date: this.getDateFromDays(132), Price: this.prices[232] },
          { Date: this.getDateFromDays(131), Price: this.prices[233] },
          { Date: this.getDateFromDays(130), Price: this.prices[234] },
          { Date: this.getDateFromDays(129), Price: this.prices[235] },
          { Date: this.getDateFromDays(128), Price: this.prices[236] },
          { Date: this.getDateFromDays(127), Price: this.prices[237] },
          { Date: this.getDateFromDays(126), Price: this.prices[238] },
          { Date: this.getDateFromDays(125), Price: this.prices[239] },
          { Date: this.getDateFromDays(124), Price: this.prices[240] },
          { Date: this.getDateFromDays(123), Price: this.prices[241] },
          { Date: this.getDateFromDays(122), Price: this.prices[242] },
          { Date: this.getDateFromDays(121), Price: this.prices[243] },
          { Date: this.getDateFromDays(120), Price: this.prices[244] },
          { Date: this.getDateFromDays(119), Price: this.prices[245] },
          { Date: this.getDateFromDays(118), Price: this.prices[246] },
          { Date: this.getDateFromDays(117), Price: this.prices[247] },
          { Date: this.getDateFromDays(116), Price: this.prices[248] },
          { Date: this.getDateFromDays(115), Price: this.prices[249] },
          { Date: this.getDateFromDays(114), Price: this.prices[250] },
          { Date: this.getDateFromDays(113), Price: this.prices[251] },
          { Date: this.getDateFromDays(112), Price: this.prices[252] },
          { Date: this.getDateFromDays(111), Price: this.prices[253] },
          { Date: this.getDateFromDays(110), Price: this.prices[254] },
          { Date: this.getDateFromDays(109), Price: this.prices[255] },
          { Date: this.getDateFromDays(108), Price: this.prices[256] },
          { Date: this.getDateFromDays(107), Price: this.prices[257] },
          { Date: this.getDateFromDays(106), Price: this.prices[258] },
          { Date: this.getDateFromDays(105), Price: this.prices[259] },
          { Date: this.getDateFromDays(104), Price: this.prices[260] },
          { Date: this.getDateFromDays(103), Price: this.prices[261] },
          { Date: this.getDateFromDays(102), Price: this.prices[262] },
          { Date: this.getDateFromDays(101), Price: this.prices[263] },
          { Date: this.getDateFromDays(100), Price: this.prices[264] },
          { Date: this.getDateFromDays(99), Price: this.prices[265] },
          { Date: this.getDateFromDays(98), Price: this.prices[266] },
          { Date: this.getDateFromDays(97), Price: this.prices[267] },
          { Date: this.getDateFromDays(96), Price: this.prices[268] },
          { Date: this.getDateFromDays(95), Price: this.prices[269] },
          { Date: this.getDateFromDays(94), Price: this.prices[270] },
          { Date: this.getDateFromDays(93), Price: this.prices[271] },
          { Date: this.getDateFromDays(92), Price: this.prices[272] },
          { Date: this.getDateFromDays(91), Price: this.prices[273] },
          { Date: this.getDateFromDays(90), Price: this.prices[274] },
          { Date: this.getDateFromDays(89), Price: this.prices[275] },
          { Date: this.getDateFromDays(88), Price: this.prices[276] },
          { Date: this.getDateFromDays(87), Price: this.prices[277] },
          { Date: this.getDateFromDays(86), Price: this.prices[278] },
          { Date: this.getDateFromDays(85), Price: this.prices[279] },
          { Date: this.getDateFromDays(84), Price: this.prices[280] },
          { Date: this.getDateFromDays(83), Price: this.prices[281] },
          { Date: this.getDateFromDays(82), Price: this.prices[282] },
          { Date: this.getDateFromDays(81), Price: this.prices[283] },
          { Date: this.getDateFromDays(80), Price: this.prices[284] },
          { Date: this.getDateFromDays(79), Price: this.prices[285] },
          { Date: this.getDateFromDays(78), Price: this.prices[286] },
          { Date: this.getDateFromDays(77), Price: this.prices[287] },
          { Date: this.getDateFromDays(76), Price: this.prices[288] },
          { Date: this.getDateFromDays(75), Price: this.prices[289] },
          { Date: this.getDateFromDays(74), Price: this.prices[290] },
          { Date: this.getDateFromDays(73), Price: this.prices[291] },
          { Date: this.getDateFromDays(72), Price: this.prices[292] },
          { Date: this.getDateFromDays(71), Price: this.prices[293] },
          { Date: this.getDateFromDays(70), Price: this.prices[294] },
          { Date: this.getDateFromDays(69), Price: this.prices[295] },
          { Date: this.getDateFromDays(68), Price: this.prices[296] },
          { Date: this.getDateFromDays(67), Price: this.prices[297] },
          { Date: this.getDateFromDays(66), Price: this.prices[298] },
          { Date: this.getDateFromDays(65), Price: this.prices[299] },
          { Date: this.getDateFromDays(64), Price: this.prices[300] },
          { Date: this.getDateFromDays(63), Price: this.prices[301] },
          { Date: this.getDateFromDays(62), Price: this.prices[302] },
          { Date: this.getDateFromDays(61), Price: this.prices[303] },
          { Date: this.getDateFromDays(60), Price: this.prices[304] },
          { Date: this.getDateFromDays(59), Price: this.prices[305] },
          { Date: this.getDateFromDays(58), Price: this.prices[306] },
          { Date: this.getDateFromDays(57), Price: this.prices[307] },
          { Date: this.getDateFromDays(56), Price: this.prices[308] },
          { Date: this.getDateFromDays(55), Price: this.prices[309] },
          { Date: this.getDateFromDays(54), Price: this.prices[310] },
          { Date: this.getDateFromDays(53), Price: this.prices[311] },
          { Date: this.getDateFromDays(52), Price: this.prices[312] },
          { Date: this.getDateFromDays(51), Price: this.prices[313] },
          { Date: this.getDateFromDays(50), Price: this.prices[314] },
          { Date: this.getDateFromDays(49), Price: this.prices[315] },
          { Date: this.getDateFromDays(48), Price: this.prices[316] },
          { Date: this.getDateFromDays(47), Price: this.prices[317] },
          { Date: this.getDateFromDays(46), Price: this.prices[318] },
          { Date: this.getDateFromDays(45), Price: this.prices[319] },
          { Date: this.getDateFromDays(44), Price: this.prices[320] },
          { Date: this.getDateFromDays(43), Price: this.prices[321] },
          { Date: this.getDateFromDays(42), Price: this.prices[322] },
          { Date: this.getDateFromDays(41), Price: this.prices[323] },
          { Date: this.getDateFromDays(40), Price: this.prices[324] },
          { Date: this.getDateFromDays(39), Price: this.prices[325] },
          { Date: this.getDateFromDays(38), Price: this.prices[326] },
          { Date: this.getDateFromDays(37), Price: this.prices[327] },
          { Date: this.getDateFromDays(36), Price: this.prices[328] },
          { Date: this.getDateFromDays(35), Price: this.prices[329] },
          { Date: this.getDateFromDays(34), Price: this.prices[330] },
          { Date: this.getDateFromDays(33), Price: this.prices[331] },
          { Date: this.getDateFromDays(32), Price: this.prices[332] },
          { Date: this.getDateFromDays(31), Price: this.prices[333] },
          { Date: this.getDateFromDays(30), Price: this.prices[334] },
          { Date: this.getDateFromDays(29), Price: this.prices[335] },
          { Date: this.getDateFromDays(28), Price: this.prices[336] },
          { Date: this.getDateFromDays(27), Price: this.prices[337] },
          { Date: this.getDateFromDays(26), Price: this.prices[338] },
          { Date: this.getDateFromDays(25), Price: this.prices[339] },
          { Date: this.getDateFromDays(24), Price: this.prices[340] },
          { Date: this.getDateFromDays(23), Price: this.prices[341] },
          { Date: this.getDateFromDays(22), Price: this.prices[342] },
          { Date: this.getDateFromDays(21), Price: this.prices[343] },
          { Date: this.getDateFromDays(20), Price: this.prices[344] },
          { Date: this.getDateFromDays(19), Price: this.prices[345] },
          { Date: this.getDateFromDays(18), Price: this.prices[346] },
          { Date: this.getDateFromDays(17), Price: this.prices[347] },
          { Date: this.getDateFromDays(16), Price: this.prices[348] },
          { Date: this.getDateFromDays(15), Price: this.prices[349] },
          { Date: this.getDateFromDays(14), Price: this.prices[350] },
          { Date: this.getDateFromDays(13), Price: this.prices[351] },
          { Date: this.getDateFromDays(12), Price: this.prices[352] },
          { Date: this.getDateFromDays(11), Price: this.prices[353] },
          { Date: this.getDateFromDays(10), Price: this.prices[354] },
          { Date: this.getDateFromDays(9), Price: this.prices[355] },
          { Date: this.getDateFromDays(8), Price: this.prices[356] },
          { Date: this.getDateFromDays(7), Price: this.prices[357] },
          { Date: this.getDateFromDays(6), Price: this.prices[358] },
          { Date: this.getDateFromDays(5), Price: this.prices[359] },
          { Date: this.getDateFromDays(4), Price: this.prices[360] },
          { Date: this.getDateFromDays(3), Price: this.prices[361] },
          { Date: this.getDateFromDays(2), Price: this.prices[362] },
          { Date: this.getDateFromDays(1), Price: this.prices[363] },
          { Date: this.getDateFromDays(0), Price: this.prices[364] },
        ];

      this.scale = newScale;

      if(this.scale.localeCompare('14d')==0){
        this.sampleData = this.sampleDataCopy.slice(-14);
        this.maxPrice = Math.max(...this.prices.slice(-14));
        this.minPrice = Math.min(...this.prices.slice(-14));
      }else if(this.scale.localeCompare('30d')==0){
        this.sampleData = this.sampleDataCopy.slice(-30);
        this.maxPrice = Math.max(...this.prices.slice(-30));
        this.minPrice = Math.min(...this.prices.slice(-30));
      }else{
        this.sampleData = this.sampleDataCopy;
        this.maxPrice = Math.max(...this.prices);
        this.minPrice = Math.min(...this.prices);
      }


      this.padding = { left: 20, top: 5, right: 20, bottom: 20 };

      this.titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

      this.backgroundColor = 'rgb(34, 34, 34)'
      this.borderLineColor = 'rgb(34, 34, 34)'

      this.xAxis =
      {
        dataField: 'Date',
        showGridLines: false,
        showLabels: false,
        flip: false
      };

      this.valueAxis =
      {
        flip: false,
        showGridLines: false,
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
            toolTipFormatSettings: { thousandsSeparator: ',', decimalPlaces: this.crypto.current_price < 1 ? 8 : 2 },
            valueAxis:
            {
              unitInterval: this.crypto.current_price >= 1 && this.crypto.current_price < 1.005 ? 0.05 : 0,
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
    }else{
      this.http.get(`https://api.coingecko.com/api/v3/coins/${this.crypto.id}/market_chart?vs_currency=usd&days=1&interval=hourly`).subscribe((data: any) => {
        let lista: any[] = data.prices;
        this.prices24h = [];
        lista.forEach(a => {
          this.prices24h.push(a[1]);
        });

        this.sampleDataCopy =
          [
            { Date: this.getDateFromHours(23), Price: this.prices24h[0] },
            { Date: this.getDateFromHours(22), Price: this.prices24h[1] },
            { Date: this.getDateFromHours(21), Price: this.prices24h[2] },
            { Date: this.getDateFromHours(20), Price: this.prices24h[3] },
            { Date: this.getDateFromHours(19), Price: this.prices24h[4] },
            { Date: this.getDateFromHours(18), Price: this.prices24h[5] },
            { Date: this.getDateFromHours(17), Price: this.prices24h[6] },
            { Date: this.getDateFromHours(16), Price: this.prices24h[7] },
            { Date: this.getDateFromHours(15), Price: this.prices24h[8] },
            { Date: this.getDateFromHours(14), Price: this.prices24h[9] },
            { Date: this.getDateFromHours(13), Price: this.prices24h[10] },
            { Date: this.getDateFromHours(12), Price: this.prices24h[11] },
            { Date: this.getDateFromHours(11), Price: this.prices24h[12] },
            { Date: this.getDateFromHours(10), Price: this.prices24h[13] },
            { Date: this.getDateFromHours(9), Price: this.prices24h[14] },
            { Date: this.getDateFromHours(8), Price: this.prices24h[15] },
            { Date: this.getDateFromHours(7), Price: this.prices24h[16] },
            { Date: this.getDateFromHours(6), Price: this.prices24h[17] },
            { Date: this.getDateFromHours(5), Price: this.prices24h[18] },
            { Date: this.getDateFromHours(4), Price: this.prices24h[19] },
            { Date: this.getDateFromHours(3), Price: this.prices24h[20] },
            { Date: this.getDateFromHours(2), Price: this.prices24h[21] },
            { Date: this.getDateFromHours(1), Price: this.prices24h[22] },
            { Date: this.getDateFromHours(0), Price: this.prices24h[23] },
          ];

      this.scale = newScale;

        this.sampleData = this.sampleDataCopy;

        this.maxPrice = Math.max(...this.prices24h);
        this.minPrice = Math.min(...this.prices24h);

        this.padding = { left: 20, top: 5, right: 20, bottom: 20 };

        this.titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        this.backgroundColor = 'rgb(34, 34, 34)'
        this.borderLineColor = 'rgb(34, 34, 34)'

        this.xAxis =
        {
          dataField: 'Date',
          showGridLines: false,
          showLabels: false,
          flip: false
        };

        this.valueAxis =
        {
          flip: false,
          showGridLines: false,
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
              toolTipFormatSettings: { thousandsSeparator: ',', decimalPlaces: this.crypto.current_price < 1 ? 8 : 2 },
              valueAxis:
              {
                unitInterval: this.crypto.current_price >= 1 && this.crypto.current_price < 1.005 ? 0.05 : 0,
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

  getDateFromDays(days: number): string {
    const currentDate = new Date();
    const wantedDate = new Date(currentDate.getTime());
    wantedDate.setDate(currentDate.getDate() - days);
    return wantedDate.toLocaleDateString();
  }

  getDateFromHours(hours: number): string {
    const currentDate = new Date();
    const wantedDate = new Date(currentDate.getTime());
    wantedDate.setHours(currentDate.getHours() - hours);
    return wantedDate.toLocaleTimeString().length == 8 ? wantedDate.toLocaleTimeString().substring(0, 5) : wantedDate.toLocaleTimeString().substring(0, 4);
  }

  ngOnInit(): void {
    this.crypto = (this.location.getState() as any);
    if (this.crypto.id != undefined) {
      localStorage.setItem('coin', JSON.stringify(this.crypto))
    } else {
      this.crypto = JSON.parse(localStorage.getItem('coin')!);
    }
    console.log('storage: ' + (JSON.parse(localStorage.getItem('coin')!)).id);
    // GET COIN BY ID
    this.http.get(`https://api.coingecko.com/api/v3/coins/${this.crypto.id}`).subscribe((coinById: any) => {
      this.crypto.current_price = coinById.market_data.current_price.usd;
      this.crypto.market_cap_rank = coinById.market_data.market_cap_rank;
      this.crypto.market_cap = coinById.market_data.market_cap.usd;
      this.total_volume = coinById.market_data.total_volume.usd;
      this.variation24 = coinById.market_data.price_change_percentage_24h;
      this.variation7d = coinById.market_data.price_change_percentage_7d;
      this.high_24h = coinById.market_data.high_24h.usd;
      this.low_24h = coinById.market_data.low_24h.usd;
      this.description = coinById.description.en;
      this.largeImg = coinById.image.large;
      this.genesis_date = coinById.genesis_date;
      this.likes = coinById.sentiment_votes_up_percentage;
      this.dislikes = coinById.sentiment_votes_down_percentage;
      this.total_supply = coinById.market_data.total_supply;
      this.max_supply = coinById.market_data.max_supply;
      this.circulating_supply = coinById.market_data.circulating_supply;
      this.homepage = coinById.links.homepage[0];

      console.log('likes: ' + this.likes)
      // GET LIST OF PRICES
      this.changeChart('24h')
    })

  }

}
