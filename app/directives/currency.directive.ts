import {Directive, Output, ElementRef, Input, EventEmitter} from 'angular2/core';
import {isNumber} from "angular2/src/facade/lang";
@Directive({
    selector: '[myCurrency]',
    host: {
        '(blur)': 'onBlur($event)',
        '(focus)': 'onFocus($event)'
    }

})
export class CurrencyDirective {
    @Output() ngModelChange:EventEmitter<any> = new EventEmitter()
    value: any
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

        aux = value.toFixed(this._decimalPlaces);
        aux = aux.replace('.',',');
        aux = 'R$ ' + aux.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');

        $event.target.value = aux;
        this.value = aux
        this.ngModelChange.emit(this.value)
    }

    onFocus($event) {
        let value = $event.target.value;
        value = value.replace('R$ ', '');
        value = value.replace(/\./g,'' );

        $event.target.value = value;
        $event.target.select();
    }
}