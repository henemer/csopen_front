import {Injectable} from 'angular2/core'

@Injectable()
export class FormattersService {

    public numberToPercentageString(n:number, decimalPlaces:number = 4) {
        var s:string;

        s = n.toFixed(decimalPlaces);
        s = s.replace('.',',');
        s = s.replace(/(\d)(?=(\d{3})+\,)/g, '$1.') + ' %';

        return s;
    }

    public numberToCurrencyString(n:number, decimalPlaces:number = 2) {
        var s:string;

        s = n.toFixed(decimalPlaces);
        s = s.replace('.',',');
        s = 'R$ '+ s.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');

        return s;
    }

    public numberToNumberString(n:number, decimalPlaces:number = 3) {
        var s:string;

        s = n.toFixed(decimalPlaces);
        s = s.replace('.',',');
        s = s.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');

        return s;
    }
    

}