import {Component, EventEmitter} from 'angular2/core'
import {Product} from '../model'
import {ProductService} from '../service'
import {ProductDataComponent} from '../product/productData.component'

@Component({
    selector:'product-delete',
    templateUrl: 'app/product/productDelete.component.html',
    inputs:['p'],
    outputs:['closeDelete'],
    providers: [ProductService],
    directives: [ProductDataComponent]

})
export class ProductDeleteComponent{
    private product:Product = new Product();
    private closeDelete = new EventEmitter();

    constructor(private productService:ProductService) {}

    clickDeleteProduct(id) {
        this.productService.delete(id).subscribe(
            result => this.closeDeleteProduct(this.closeDelete),
            error =>  console.log(<any>error)
        );
    }

    closeDeleteProduct(Event) {
        this.closeDelete.next({});
    }
}


