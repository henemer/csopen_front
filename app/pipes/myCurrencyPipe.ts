import {Pipe} from "angular2/core";
import {FormattersService} from "../formatters/formatters.service";

@Pipe( {
    name: "myCurrency"
})

export class MyCurrencyPipe {
    transform(value) {
        var s:string;
        s = Number(value).toFixed(2);
        s = s.replace('.',',');
        s = 'R$ '+ s.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        return s;
    }
}