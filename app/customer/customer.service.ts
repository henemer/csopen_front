import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {Customer} from '../model/'
import {Config} from '../service'

@Injectable()
export class CustomerService {
    constructor(private http:Http) {}
    
    public getCustomers() {
        return this.http.get(Config.BASE_URL+'customer/')
         .map(res=> res.json());
    }
    public insert(c:Customer){
       return this.http
            .post(Config.BASE_URL+'customer/', JSON.stringify(c))
            .map(res => res.json());
    }
    public getNextCode(c:Customer) {
        return this.http
            .get(Config.BASE_URL+'customer/nextcode').subscribe(response => c.code = parseInt(response.text()));
            
    }    
}