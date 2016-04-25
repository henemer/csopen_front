import {Component} from 'angular2/core'
import {Supplier} from '../model'
import {SupplierService} from '../service'
import {SupplierListComponent} from '../supplier/supplierList.component'
import {SupplierFormComponent} from '../supplier/supplierForm.component'
import {SupplierDeleteComponent} from '../supplier/supplierDelete.component'
import {SupplierShowComponent} from '../supplier/supplierShow.component'
import {SupplierFilter} from "./supplierFilter";

@Component({
    selector: 'my-app',
    providers: [SupplierService],
    templateUrl: '/app/supplier/supplier.component.html',
    directives: [SupplierListComponent, SupplierFormComponent,
        SupplierDeleteComponent, SupplierShowComponent]

})
export class SupplierComponent{
    public suppliers:Array<Supplier>;
    public selectedSupplier;
    public deleteSelectedSupplier;
    public operation;
    public supplierService:SupplierService;
    public supplierFilter:SupplierFilter;

    constructor(supplierService:SupplierService) {
        this.operation = 'list';
        this.supplierService = supplierService;
        this.supplierFilter = this.supplierService.supplierFilter;
        supplierService.getSuppliers()
            .subscribe(suppliers => this.suppliers = suppliers);
    }

    newSupplier() {
        var s:Supplier = new Supplier();
        this.supplierService.getMaxCode(s);
        this.selectedSupplier = s;
        this.operation = 'new';
    }

    onSelectSupplier(supplier) {
        this.selectedSupplier = supplier;
        this.operation = 'update';

    }

    onDeleteSupplier(supplier) {
        this.deleteSelectedSupplier = supplier;
        this.operation='delete';
    }

    onCloseForm() {
        this.supplierService.getSuppliers()
            .subscribe(suppliers => this.suppliers = suppliers);
        this.selectedSupplier = null;
        this.operation = 'list';
    }

    onCloseDelete() {
        this.supplierService.getSuppliers()
            .subscribe(suppliers => this.suppliers = suppliers);
        this.selectedSupplier = null;
        this.operation = 'list';

    }

    onShowSupplier(supplier) {
        this.supplierService.show(supplier.id)
            .subscribe(suppliers =>  {this.selectedSupplier = suppliers; this.operation='show'});

    }

    onCloseShow() {
        this.supplierService.getSuppliers()
            .subscribe(suppliers => this.selectedSupplier = suppliers);
        this.selectedSupplier = null;
        this.operation = 'list';
    }

}