import {Component} from 'angular2/core'
import {Supplier} from './model'
import {SupplierService} from './service'
import {SupplierListComponent} from './supplier/supplierList.component'


@Component({
    selector: 'my-app',
    providers: [SupplierService],
    templateUrl: '/app/app.component.html',
    directives: [SupplierListComponent]
    
})
export class AppComponent{
    public suppliers:Array<Supplier>;
    constructor(supplierService:SupplierService) {
        supplierService.getSuppliers()
            .subscribe(suppliers => this.suppliers = suppliers)
    }
 }