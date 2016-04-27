import {Component, EventEmitter} from 'angular2/core'
import {ProductDataComponent} from '../product/productData.component'

@Component({
    selector:'product-show',
    templateUrl: 'app/product/productShow.component.html',
    inputs:['p'],
    outputs:['closeShow'],
    directives: [ProductDataComponent]

})
export class ProductShowComponent{
    private closeShow = new EventEmitter();

    closeShowProduct(Event) {
        this.closeShow.next({});
    }
}
