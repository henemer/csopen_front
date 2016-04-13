import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {Customer} from '../model/'
import {Config} from '../service'
import {Customer} from "./customer";

@Injectable()
export class CustomerService {
    public headers:Headers;
    constructor(private http:Http) {
        this.headers = new Headers();  //*******
        this.headers.append('Content-Type', 'application/json') //******
    }



    public getCustomers(filterBy, filter, all) {
        return this.http.get(Config.BASE_URL+'/clientes/')
         .map(res=> res.json());
    }

    public show(id) {
        return this.http.get(Config.BASE_URL+'/clientes/' + id)
         .map(res=> res.json());
    }

    public insert(c:Customer){
        return this.http
            .post(Config.BASE_URL+'/clientes/', JSON.stringify(c), { headers: this.headers } )
            .map(res => res.json());
    }
   public update(c:Customer){
       return this.http
            .put(Config.BASE_URL+'/clientes/' + c.id, JSON.stringify(c), { headers: this.headers })
            .map(res => res.json());
    }
  
    public getNextCode(c:Customer) {
        return this.http
            .get(Config.BASE_URL+'/customer/nextcode').subscribe(response => c.code = parseInt(response.text()));
            
    }
    
   public delete(id){
       return this.http
            .delete(Config.BASE_URL+'/clientes/' + id)
            .map(res => res.json());
    }
        
}