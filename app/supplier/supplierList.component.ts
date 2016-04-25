import {Component, EventEmitter} from 'angular2/core'
import {Supplier} from '../model'
import {SupplierService} from '../service'

@Component({
    selector: 'supplier-list',
    templateUrl: 'app/supplier/supplierList.component.html',
    inputs:['suppliers', 'supplierFilter' ],
    outputs:['selectSupplier', 'deleteSelectSupplier','showSelectSupplier']

})
export class SupplierListComponent {
    selectSupplier = new EventEmitter();
    deleteSelectSupplier = new EventEmitter();
    showSelectSupplier = new EventEmitter();
    supplierService:SupplierService;
    suppliers:Supplier;


    constructor(supplierService:SupplierService) {
        this.supplierService = supplierService;
    }

    onSelect(sup:Supplier) {
        this.selectSupplier.next(sup);
    }

    onDelete(sup:Supplier) {
        this.deleteSelectSupplier.next(sup);
    }

    onShow(sup:Supplier) {
        this.showSelectSupplier.next(sup);
    }

    onButtonFilterClick(form) {
        this.supplierService.supplierFilter.filterBy = form.filterBy.value;
        this.supplierService.supplierFilter.filter = form.filter.value;
        this.supplierService.supplierFilter.filterAll = false;
        this.supplierService.getSuppliers()
            .subscribe(suppliers => this.suppliers = suppliers);

    }

    onButtonFilterAllClick() {
        this.supplierService.supplierFilter.filterAll = true;
        this.supplierService.getSuppliers()
            .subscribe(suppliers => this.suppliers = suppliers);

    }
}