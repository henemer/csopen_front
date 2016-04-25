import {Component, EventEmitter} from "angular2/core";
import {Supplier} from "../model";
import {SupplierService} from "../service";

@Component({
    selector:'supplier-form',
    templateUrl: 'app/supplier/supplierForm.component.html',
    inputs:['supplier', 'selectedSupplier'],
    outputs:['closeForm'],
    providers: [SupplierService]
})
export class SupplierFormComponent{
    private supplier:Supplier = new Supplier();
    private closeForm = new EventEmitter();
    errorMessage:string;
    active = true;
    testeClass = '';
    messageSuccess = '';

    constructor(private supplierService:SupplierService) {}

    onButtonGravarClick(event) {
        this.errorMessage = '';
        if(this.supplier.id > 0) {
            this.supplierService.update(this.supplier).subscribe(
                result => this.closeFormSupplier(event),
                error =>  this.errorMessage = <any>error
            );

        }
        else
        {
            this.supplierService.insert(this.supplier).subscribe(
                result => this.newSupplier(),
                error => this.showErrors(error._body)
            );

        }
    }

    newSupplier() {
        this.messageSuccess = 'Novo fornecedor gravado com sucesso !';
        this.supplier = new Supplier();
        this.supplierService.getMaxCode(this.supplier);
        this.active = false;  // desabilita o form e reabilita para restaurar o pristine
        setTimeout(()=> this.active=true, 0);

        setTimeout(function() {
            this.messageSuccess = '';
        }.bind(this), 3000);

    }

    closeFormSupplier(Event) {
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

        if (isNaN(this.supplier.code))
        {
            return;
        }

        if (typeof this.supplier.id !== "undefined") {
            id = this.supplier.id;
        }

        console.log(this.supplier.id);

        this.supplierService.codeExists(id, this.supplier.code).subscribe(
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
