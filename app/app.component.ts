import {Component} from 'angular2/core'
import {CustomerComponent} from './customer/customer.component'
import {ROUTER_DIRECTIVES, RouteConfig,  LocationStrategy,
  HashLocationStrategy} from 'angular2/router'

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [CustomerComponent, ROUTER_DIRECTIVES]
    
})
 @RouteConfig([
// { path: '/home', name: 'Home', component: HomeComponent,
// useAsDefault: true },
    { path: '/customer', name: 'Customer', component: CustomerComponent },
// { path: '/dashboard', name: 'Dashboard', component: DashboardComponent }
 ])
export class AppComponent{
    
 }