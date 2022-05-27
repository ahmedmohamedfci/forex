
export default class LocalStorageService{

    addTrade(trade){
        trade.id = Date.now();
        let trades = this.getTrades();
        if(!trades) trades = []
        this.setTrades([...trades, trade]);
        return trade;
    }

    removeTrade(trade){
        let trades = this.getTrades();
        trades = trades.filter(hisTrade => hisTrade.id !== trade.id);
        this.setTrades(trades);
        return trade;
    }

    setTrades(trades){
        localStorage.setItem('trades', JSON.stringify(trades));
    }

    getTrades(){
        let trades = localStorage.getItem('trades');
        if(!trades) return []
        return JSON.parse(trades);
    }

} 