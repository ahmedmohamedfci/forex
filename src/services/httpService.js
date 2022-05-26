

class HTTPService{
    historyApi = ''
    latestApi = 'https://api.exchangerate.host/latest';
    get(api, callback){
        let request = new XMLHttpRequest();
        request.open('GET', api);
        request.responseType = 'json';
        request.send();
        request.onload = ()=>{
            callback(request.response);
        };
    }

    getLatestSymbols(callback, symbol = 'EUR'){
        this.get(this.latestApi,callback);
    }
    
}


export default HTTPService;