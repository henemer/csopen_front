import {Directive, ElementRef, Input, Output, EventEmitter} from 'angular2/core';

@Directive({
    selector: '[myPercentage]',
    host: {
        '(blur)': 'onBlur($event)',
        '(focus)': 'onFocus($event)'
    }
})
export class PercentageDirective {
    @Output() ngModelChange:EventEmitter<any> = new EventEmitter()
    value: any

    private _decimalPlaces = 4;
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
        aux = aux.replace(/(\d)(?=(\d{3})+\,)/g, '$1.') + ' %';

        $event.target.value = aux;
        this.value = aux
        this.ngModelChange.emit(this.value)
    }

    onFocus($event) {
        let value = $event.target.value;
        value = value.replace(' %', '');
        value = value.replace(/\./g,'' );

        $event.target.value = value;
        $event.target.select();
    }
}