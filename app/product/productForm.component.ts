import {Component, EventEmitter} from "angular2/core";
import {Product} from "../model";
import {ProductService} from "../service";
import {CurrencyDirective} from "../directives/currency.directive"

@Component({
    selector:'product-form',
    directives: [CurrencyDirective],
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
        if(this.product.id > 0) {
            this.productService.update(this.product).subscribe(
                result => this.closeFormProduct(event),
                error =>  this.errorMessage = <any>error
            );

        }
        else
        {
            this.productService.insert(this.product).subscribe(
                result => this.newProduct(),
                error => this.showErrors(error._body)
            );

        }
    }

    newProduct() {
        this.messageSuccess = 'Novo produto gravado com sucesso !';
        this.product = new Product();
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
                this.errorMessage += ' - '+ teste[i] + '<br>';
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
}
