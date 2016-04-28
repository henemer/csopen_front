import {Directive, ElementRef, Input} from 'angular2/core';
import {isNumber} from "angular2/src/facade/lang";
@Directive({
    selector: '[myCurrency]',
    host: {
        '(blur)': 'onBlur($event)',
        '(focus)': 'onFocus($event)'
    }
})
export class CurrencyDirective {
    private _decimalPlaces = 2;
    private _el:ElementRef;
    @Input() set decimalPlaces(decimalPlaces:number){
        this._decimalPlaces = decimalPlaces || this._decimalPlaces;
    }
    constructor(el: ElementRef) { this._el = el }
    onBlur($event) {
        var value:number = 0;
        var aux:String;

        aux = $event.target.value;
        aux = aux.replace('.','');
        aux = aux.replace(',','.');

        value = Number(aux);

        if(isNaN(value)) {
            value = 0;
        }

        aux = value.toFixed(2);
        aux = aux.replace('.',',');
        aux = 'R$ ' + aux.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');

        $event.target.value = aux;
    }

    onFocus($event) {
        let value = $event.target.value;
        value = value.replace('R$ ', '');
        value = value.replace(/\./g,'' );

        $event.target.value = value;
        $event.target.select();
    }

//    onMouseLeave() { this._highlight(null); }
//    private _highlight(color:string) {
//        this._el.style.backgroundColor = color;
//    }
}