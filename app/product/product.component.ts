import {Component} from 'angular2/core'
import {Product} from '../model'
import {ProductService} from '../service'
import {ProductListComponent} from '../product/productList.component'
import {ProductFormComponent} from '../product/productForm.component'
import {ProductDeleteComponent} from '../product/productDelete.component'
import {ProductShowComponent} from '../product/productShow.component'
import {ProductFilter} from "./productFilter";

@Component({
    selector: 'my-app',
    providers: [ProductService],
    templateUrl: '/app/product/product.component.html',
    directives: [ProductListComponent, ProductFormComponent,
        ProductDeleteComponent, ProductShowComponent]

})
export class ProductComponent{
    public products:Array<Product>;
    public selectedProduct;
    public deleteSelectedProduct;
    public operation;
    public productService:ProductService;
    public productFilter:ProductFilter;

    constructor(productService:ProductService) {
        this.operation = 'list';
        this.productService = productService;
        this.productFilter = this.productService.productFilter;
        productService.getProducts()
            .subscribe(products => this.products = products);
    }

    newProduct() {
        var p:Product = new Product();
        this.selectedProduct = p;
        this.operation = 'new';
    }

    onSelectProduct(product) {
        this.selectedProduct = product;
        this.operation = 'update';
    }

    onDeleteProduct(product) {
        this.deleteSelectedProduct = product;
        this.operation='delete';
    }

    onCloseForm() {
        this.productService.getProducts()
            .subscribe(products => this.products = products);
        this.selectedProduct = null;
        this.operation = 'list';
    }

    onCloseDelete() {
        this.productService.getProducts()
            .subscribe(products => this.products = products);
        this.selectedProduct = null;
        this.operation = 'list';

    }

    onShowProduct(product) {
        this.productService.show(product.id)
            .subscribe(products =>  {this.selectedProduct = products; this.operation='show'});

    }

    onCloseShow() {
        this.productService.getProducts()
            .subscribe(products => this.selectedProduct = products);
        this.selectedProduct = null;
        this.operation = 'list';
    }

}