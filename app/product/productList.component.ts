import {Component, EventEmitter} from 'angular2/core'
import {Product} from '../model'
import {ProductService} from '../service'

@Component({
    selector: 'product-list',
    templateUrl: 'app/product/productList.component.html',
    inputs:['products', 'productFilter' ],
    outputs:['selectProduct', 'deleteSelectProduct','showSelectProduct']

})
export class ProductListComponent {
    selectProduct = new EventEmitter();
    deleteSelectProduct = new EventEmitter();
    showSelectProduct = new EventEmitter();
    productService:ProductService;
    products:Product;


    constructor(productService:ProductService) {
        this.productService = productService;
    }

    onSelect(prod:Product) {
        this.selectProduct.next(prod);
    }

    onDelete(prod:Product) {
        this.deleteSelectProduct.next(prod);
    }

    onShow(prod:Product) {
        this.showSelectProduct.next(prod);
    }

    onButtonFilterClick(form) {
        this.productService.productFilter.filterBy = form.filterBy.value;
        this.productService.productFilter.filter = form.filter.value;
        this.productService.productFilter.filterAll = false;
        this.productService.getProducts()
            .subscribe(products => this.products = products);

    }

    onButtonFilterAllClick() {
        this.productService.productFilter.filterAll = true;
        this.productService.getProducts()
            .subscribe(products => this.products = products);
    }
    
    
}