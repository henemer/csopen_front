import {Pipe} from "angular2/core";

@Pipe( {
    name: "myNumber"
})

export class MyNumberPipe {
    transform(value) {
        var s:string;
        s = Number(value).toFixed(3);
        s = s.replace('.',',');
        s = s.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');
        return s;
    }
}