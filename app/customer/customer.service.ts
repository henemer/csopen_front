import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from 'angular2/http'
import {Injectable} from 'angular2/core'
// import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {Customer} from '../model/'
// import {CustomerFilter} from '../model/'
import {Config} from '../service'
import {Observable} from "rxjs/Observable";
import {CustomerFilter} from "./customerFilter";

@Injectable()
export class CustomerService {
    public headers:Headers;
    public customerFilter:CustomerFilter = new CustomerFilter();
    constructor(private http:Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json')
        this.customerFilter = new CustomerFilter();
        this.customerFilter.filterBy = '?name__icontains=';
        this.customerFilter.filter = '';
        this.customerFilter.filterAll = false;
    }

    public getCustomers() {
        if(this.customerFilter.filterAll==true) {
             this.customerFilter.filterBy = '?name__icontains=';
             this.customerFilter.filter = '';
        }

        return this.http.get(Config.BASE_URL+'/clientes/'+this.customerFilter.filterBy+this.customerFilter.filter)
         .map(res=> res.json());
    }

    public show(id) {
        return this.http.get(Config.BASE_URL+'/clientes/' + id)
         .map(res=> res.json());
    }

    public insert(c:Customer) {
        return this.http
            .post(Config.BASE_URL+'/clientes/', JSON.stringify(c), { headers: this.headers } )
            .map(res => res.json());
    }
    
   public update(c:Customer){
       return this.http
            .put(Config.BASE_URL+'/clientes/' + c.id, JSON.stringify(c), { headers: this.headers })
            .map(res => res.json());
    }
  
    public getMaxCode(c:Customer) {
        return this.http
            .get(Config.BASE_URL+'/clientes/getmaxcode/').subscribe(response => c.code = parseInt(response.text()));
            
    }
    
    public delete(id) {
        return this.http
            .delete(Config.BASE_URL+'/clientes/' + id)
            .map(res => res.json());
    }

    public codeExists(id, code) {
        return this.http
            .get(Config.BASE_URL+'/clientes/codeexists/'+id+'/'+code).
            map(res => res.json());

    }
}