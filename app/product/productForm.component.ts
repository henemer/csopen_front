import {Component, EventEmitter} from "angular2/core";
import {Product} from "../model";
import {ProductService} from "../service";
import {CurrencyDirective} from "../directives/currency.directive"
import {PercentageDirective} from "../directives/percentage.directive";
import {NumberDirective} from "../directives/number.directive";

@Component({
    selector:'product-form',
    directives: [CurrencyDirective, PercentageDirective, NumberDirective],
    templateUrl: 'app/product/productForm.component.html',
    inputs:['product', 'selectedProduct'],
    outputs:['closeForm'],
    providers: [ProductService]

})
export class ProductFormComponent{
    private product:Product = new Product();
    private closeForm = new EventEmitter();
    errorMessage:string;
    active = true;
    testeClass = '';
    messageSuccess = '';

    constructor(private productService:ProductService) {}

    onButtonGravarClick(event) {
        this.errorMessage = '';

        var pro =  new Product();

        pro.id =  this.product.id;
        pro.code = this.product.code;
        pro.description = this.product.description;
        pro.unity = this.product.unity;
        pro.cost_price = this.numberStringConvert(this.product.cost_price);
        pro.profit_margin = this.numberStringConvert(this.product.profit_margin);
        pro.price = this.numberStringConvert(this.product.price);
        pro.reference = this.product.reference;
        pro.max_stock = this.numberStringConvert(this.product.max_stock);
        pro.min_stock = this.numberStringConvert(this.product.min_stock);
        pro.bar_code = this.product.bar_code;
        pro.ncm = this.product.ncm;
        pro.observations = this.product.observations;
        
        if(pro.id > 0) {
            this.productService.update(pro).subscribe(
                result => this.closeFormProduct(event),
                error =>  this.errorMessage = <any>error
            );

        }
        else
        {
            this.productService.insert(pro).subscribe(
                result => this.newProduct(),
                error => this.showErrors(error._body)
            );

        }
    }

    newProduct() {
        this.messageSuccess = 'Novo produto gravado com sucesso !';
        this.product = new Product();
        this.product.profit_margin = 'R$ 0,00'
        this.product.cost_price = 'R$ 0,00';
        this.product.price = 'R$ 0,00';
        this.product.max_stock = '0,000';
        this.product.min_stock = '0,000';
        
        this.active = false;  // desabilita o form e reabilita para restaurar o pristine
        setTimeout(()=> this.active=true, 0);

        setTimeout(function() {
            this.messageSuccess = '';
        }.bind(this), 3000);

    }

    closeFormProduct(Event) {
        this.closeForm.next({});
    }

    showErrors(errors) {
        this.errorMessage = '';

        var teste = JSON.parse(errors);

        for (var i in teste) {
            if (teste.hasOwnProperty(i)) {
                this.errorMessage += i +' - '+ teste[i] + '<br>';
            }
        }

    }

    blurCode(f) {
        var id = 0

        if (isNaN(this.product.code))
        {
            return;
        }

        if (typeof this.product.id !== "undefined") {
            id = this.product.id;
        }

        this.productService.codeExists(id, this.product.code).subscribe(
            result => {
                if(result == true) {
                    this.errorMessage = 'Código já cadastrado, tente outro.';
                    f.code.error = 'Código já cadastrado';
                    this.testeClass = 'ng-invalid';
                }
                else
                {
                    this.errorMessage = '';
                    this.testeClass = 'form-control';
                }
            })
    }

    numberStringConvert(numberString:string) {
        numberString = numberString.replace(/\./g,'' );
        numberString = numberString.replace('R$ ','' );
        numberString = numberString.replace(' %','' );
        numberString = numberString.replace(',','.' );
        return numberString;
    }
}

