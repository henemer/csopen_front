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
        p.cost_price = 'R$ 0,00';
        p.profit_margin = 'R$ 0,00'
        p.price = 'R$ 0,00';
        p.max_stock = '0,000';
        p.min_stock = '0,000';

        this.selectedProduct = p;
        this.operation = 'new';
    }

    onSelectProduct(product) {
        this.selectedProduct = product;
        this.selectedProduct.price = this.formatStringCurrency(this.selectedProduct.price);
        this.selectedProduct.cost_price = this.formatStringCurrency(this.selectedProduct.cost_price);
        this.selectedProduct.max_stock = this.formatStringNumber(this.selectedProduct.max_stock);
        this.selectedProduct.min_stock = this.formatStringNumber(this.selectedProduct.min_stock);
        this.selectedProduct.profit_margin = this.formatStringPercentage(this.selectedProduct.profi_margin);
        this.operation = 'update';
    }

    onDeleteProduct(product) {
        this.deleteSelectedProduct = product;
        this.deleteSelectedProduct.price = this.formatStringCurrency(this.deleteSelectedProduct.price);
        this.deleteSelectedProduct.cost_price = this.formatStringCurrency(this.deleteSelectedProduct.cost_price);
        this.deleteSelectedProduct.max_stock = this.formatStringNumber(this.deleteSelectedProduct.max_stock);
        this.deleteSelectedProduct.min_stock = this.formatStringNumber(this.deleteSelectedProduct.min_stock);
        this.deleteSelectedProduct.profit_margin = this.formatStringPercentage(this.deleteSelectedProduct.profi_margin);

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
            .subscribe(products =>  {
                this.selectedProduct = products;
                this.selectedProduct.price = this.formatStringCurrency(this.selectedProduct.price);
                this.selectedProduct.cost_price = this.formatStringCurrency(this.selectedProduct.cost_price);
                this.selectedProduct.max_stock = this.formatStringNumber(this.selectedProduct.max_stock);
                this.selectedProduct.min_stock = this.formatStringNumber(this.selectedProduct.min_stock);
                this.selectedProduct.profit_margin = this.formatStringPercentage(this.selectedProduct.profi_margin);
                this.operation='show'});
    }

    onCloseShow() {
        this.productService.getProducts()
            .subscribe(products => this.selectedProduct = products);
        this.selectedProduct = null;
        this.operation = 'list';
    }

    formatStringCurrency(stringValue:String) {
        var value;

        value = Number(stringValue);

        if(isNaN(value)) {
            value = 0;
        }

        stringValue = value.toFixed(2);
        stringValue = stringValue.replace('.',',');
        stringValue = 'R$ ' + stringValue.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');

        return stringValue;

    }

    formatStringPercentage(stringValue:String) {
        var value;

        value = Number(stringValue);

        if(isNaN(value)) {
            value = 0;
        }

        stringValue = value.toFixed(2);
        stringValue = stringValue.replace('.',',');
        stringValue = stringValue.replace(/(\d)(?=(\d{3})+\,)/g, '$1.')+' %';

        return stringValue;

    }

    formatStringNumber(stringValue:String, decimalPlaces:Number=3) {
        var value;

        value = Number(stringValue);

        if(isNaN(value)) {
            value = 0;
        }

        stringValue = value.toFixed(decimalPlaces);
        stringValue = stringValue.replace('.',',');
        stringValue = stringValue.replace(/(\d)(?=(\d{3})+\,)/g, '$1.');

        return stringValue;

    }

}