import * as moment from 'moment';


class HTTPService{
    moment = moment;
    historyApi = (startDate, endDate, base, symbol) => {
        return `https://api.exchangerate.host/timeseries?start_date=${startDate}&end_date=${endDate}&base=${base}&symbols=${symbol}`;
    }
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
        //callback({"rates":{"AED":3.920668,"AFN":94.928669,"ALL":120.443639,"AMD":486.82203,"ANG":1.924016,"AOA":447.798584,"ARS":127.069688,"AUD":1.506654,"AWG":1.921774,"AZN":1.815569,"BAM":1.958463,"BBD":2.135323,"BDT":93.875131,"BGN":1.955379,"BHD":0.402985,"BIF":2177.346529,"BMD":1.067683,"BND":1.469804,"BOB":7.339037,"BRL":5.149268,"BSD":1.067954,"BTC":0.000036,"BTN":82.715478,"BWP":12.82932,"BYN":3.603768,"BZD":2.152225,"CAD":1.368522,"CDF":2137.836656,"CHF":1.027495,"CLF":0.03253,"CLP":888.872633,"CNH":7.159371,"CNY":7.142501,"COP":4237.281036,"CRC":718.443169,"CUC":1.067705,"CUP":27.482307,"CVE":110.778353,"CZK":24.676905,"DJF":190.008405,"DKK":7.43492,"DOP":58.879965,"DZD":155.569531,"EGP":19.856554,"ERN":16.009215,"ETB":54.994295,"EUR":1,"FJD":2.301325,"FKP":0.849072,"GBP":0.849001,"GEL":3.036859,"GGP":0.849157,"GHS":8.288302,"GIP":0.849013,"GMD":57.630116,"GNF":9403.242351,"GTQ":8.189499,"GYD":223.34308,"HKD":8.378324,"HNL":26.086278,"HRK":7.531858,"HTG":120.611311,"HUF":392.396962,"IDR":15616.400898,"ILS":3.569659,"IMP":0.84868,"INR":82.665866,"IQD":1557.928963,"IRR":45196.874325,"ISK":137.992048,"JEP":0.848759,"JMD":164.921152,"JOD":0.757278,"JPY":135.81096,"KES":124.501053,"KGS":84.843961,"KHR":4334.314957,"KMF":493.11027,"KPW":960.500955,"KRW":1352.172776,"KWD":0.327539,"KYD":0.889528,"KZT":443.219662,"LAK":14178.340503,"LBP":1624.238731,"LKR":384.248941,"LRD":161.684623,"LSL":16.74366,"LYD":5.088647,"MAD":10.602344,"MDL":20.379166,"MGA":4291.158762,"MKD":61.66123,"MMK":1976.215312,"MNT":3315.802275,"MOP":8.631177,"MRU":38.938097,"MUR":46.147726,"MVR":16.483473,"MWK":871.524201,"MXN":21.165158,"MYR":4.691065,"MZN":68.143384,"NAD":16.79814,"NGN":443.005435,"NIO":38.228243,"NOK":10.221511,"NPR":132.344987,"NZD":1.648691,"OMR":0.411587,"PAB":1.06792,"PEN":3.950353,"PGK":3.773604,"PHP":55.923542,"PKR":216.006992,"PLN":4.600725,"PYG":7323.06113,"QAR":3.88648,"RON":4.938083,"RSD":117.398052,"RUB":64.40837,"RWF":1090.717621,"SAR":4.003201,"SBD":8.669919,"SCR":14.516894,"SDG":485.052706,"SEK":10.525589,"SGD":1.468335,"SHP":0.849312,"SLL":13796.733178,"SOS":619.347395,"SRD":22.428762,"SSP":139.017652,"STD":24514.315847,"STN":24.813257,"SVC":9.339464,"SYP":2681.429369,"SZL":16.727276,"THB":36.597776,"TJS":13.341923,"TMT":3.735305,"TND":3.23588,"TOP":2.467324,"TRY":17.453222,"TTD":7.23963,"TWD":31.438831,"TZS":2483.426915,"UAH":31.512408,"UGX":3927.836302,"USD":1.067799,"UYU":42.712119,"UZS":11811.677336,"VES":5.285422,"VND":24758.674914,"VUV":122.60513,"WST":2.803191,"XAF":655.443091,"XAG":0.049111,"XAU":0.0011,"XCD":2.884071,"XDR":0.774753,"XOF":655.443456,"XPD":0.001467,"XPF":119.238604,"XPT":0.001317,"YER":267.073048,"ZAR":16.785008,"ZMW":18.332472,"ZWL":343.646102}});
    }
    
    getHistory(base = 'EUR', symbol = 'USD', callback){
        let now = this.moment().format('YYYY-MM-DD');
        let lastYear = this.moment().subtract(100,'d').format('YYYY-MM-DD');
        this.get(this.historyApi(lastYear, now, base, symbol), callback);

        //callback({"motd":{"msg":"If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.","url":"https://exchangerate.host/#/donate"},"success":true,"timeseries":true,"base":"EUR","start_date":"2022-02-16","end_date":"2022-05-27","rates":{"2022-02-16":{"USD":1.138049},"2022-02-17":{"USD":1.13616},"2022-02-18":{"USD":1.131641},"2022-02-19":{"USD":1.131503},"2022-02-20":{"USD":1.132353},"2022-02-21":{"USD":1.13136},"2022-02-22":{"USD":1.133032},"2022-02-23":{"USD":1.130421},"2022-02-24":{"USD":1.119663},"2022-02-25":{"USD":1.127569},"2022-02-26":{"USD":1.127017},"2022-02-27":{"USD":1.114554},"2022-02-28":{"USD":1.122682},"2022-03-01":{"USD":1.111457},"2022-03-02":{"USD":1.111526},"2022-03-03":{"USD":1.106246},"2022-03-04":{"USD":1.092479},"2022-03-05":{"USD":1.092425},"2022-03-06":{"USD":1.091724},"2022-03-07":{"USD":1.08503},"2022-03-08":{"USD":1.089755},"2022-03-09":{"USD":1.106678},"2022-03-10":{"USD":1.099191},"2022-03-11":{"USD":1.09139},"2022-03-12":{"USD":1.090817},"2022-03-13":{"USD":1.093083},"2022-03-14":{"USD":1.094086},"2022-03-15":{"USD":1.095471},"2022-03-16":{"USD":1.102024},"2022-03-17":{"USD":1.108424},"2022-03-18":{"USD":1.107379},"2022-03-19":{"USD":1.106575},"2022-03-20":{"USD":1.104109},"2022-03-21":{"USD":1.101904},"2022-03-22":{"USD":1.10283},"2022-03-23":{"USD":1.099558},"2022-03-24":{"USD":1.100828},"2022-03-25":{"USD":1.097456},"2022-03-26":{"USD":1.098463},"2022-03-27":{"USD":1.09771},"2022-03-28":{"USD":1.098939},"2022-03-29":{"USD":1.109051},"2022-03-30":{"USD":1.115912},"2022-03-31":{"USD":1.106545},"2022-04-01":{"USD":1.104735},"2022-04-02":{"USD":1.104985},"2022-04-03":{"USD":1.104553},"2022-04-04":{"USD":1.096414},"2022-04-05":{"USD":1.091251},"2022-04-06":{"USD":1.090229},"2022-04-07":{"USD":1.088541},"2022-04-08":{"USD":1.087657},"2022-04-09":{"USD":1.088082},"2022-04-10":{"USD":1.089067},"2022-04-11":{"USD":1.087306},"2022-04-12":{"USD":1.082907},"2022-04-13":{"USD":1.08849},"2022-04-14":{"USD":1.082272},"2022-04-15":{"USD":1.081543},"2022-04-16":{"USD":1.08109},"2022-04-17":{"USD":1.082169},"2022-04-18":{"USD":1.078095},"2022-04-19":{"USD":1.078588},"2022-04-20":{"USD":1.084732},"2022-04-21":{"USD":1.08357},"2022-04-22":{"USD":1.079314},"2022-04-23":{"USD":1.078543},"2022-04-24":{"USD":1.080911},"2022-04-25":{"USD":1.071627},"2022-04-26":{"USD":1.064179},"2022-04-27":{"USD":1.054828},"2022-04-28":{"USD":1.050185},"2022-04-29":{"USD":1.054152},"2022-04-30":{"USD":1.05414},"2022-05-01":{"USD":1.054068},"2022-05-02":{"USD":1.050483},"2022-05-03":{"USD":1.05229},"2022-05-04":{"USD":1.061541},"2022-05-05":{"USD":1.054801},"2022-05-06":{"USD":1.055187},"2022-05-07":{"USD":1.055226},"2022-05-08":{"USD":1.053547},"2022-05-09":{"USD":1.055589},"2022-05-10":{"USD":1.053567},"2022-05-11":{"USD":1.052416},"2022-05-12":{"USD":1.037392},"2022-05-13":{"USD":1.041497},"2022-05-14":{"USD":1.040983},"2022-05-15":{"USD":1.041346},"2022-05-16":{"USD":1.043928},"2022-05-17":{"USD":1.055199},"2022-05-18":{"USD":1.046551},"2022-05-19":{"USD":1.05811},"2022-05-20":{"USD":1.057013},"2022-05-21":{"USD":1.056434},"2022-05-22":{"USD":1.05856},"2022-05-23":{"USD":1.067812},"2022-05-24":{"USD":1.073763},"2022-05-25":{"USD":1.069027},"2022-05-26":{"USD":1.0727},"2022-05-27":{"USD":1.073733}}});
    }
}


export default HTTPService;