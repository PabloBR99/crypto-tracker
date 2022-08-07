export interface Coin {
    id: string,
    image?: string,
    symbol: string,
    name: string,
    current_price: number,
    market_cap: number,
    price_change_percentage_24h_in_currency: number,
    market_cap_rank: number
}