import {Component} from 'angular2/core'
import {CustomerComponent} from './customer/customer.component'
import {SupplierComponent} from './supplier/supplier.component'
import {ROUTER_DIRECTIVES, RouteConfig,  LocationStrategy,
  HashLocationStrategy} from 'angular2/router'
import {ProductComponent} from "./product/product.component";

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [CustomerComponent, SupplierComponent, ROUTER_DIRECTIVES]
    
})
 @RouteConfig([
    { path: '/customer', name: 'Customer', component: CustomerComponent },
     { path: '/supplier', name: 'Supplier', component: SupplierComponent },
     { path: '/product', name: 'Product', component: ProductComponent },
 ])
export class AppComponent{

}