import {Component} from 'angular2/core'
import {Supplier} from './model'
import {SupplierService} from './service'


@Component({
    selector: 'my-app',
    providers: [SupplierService],
    templateUrl: '/app/app.component.html'
    
})
export class AppComponent{
    public suppliers:Array<Supplier>;
    constructor(supplierService:SupplierService) {
        supplierService.getSuppliers()
            .subscribe(suppliers => this.suppliers = suppliers)
    }
 }