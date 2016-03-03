import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {Supplier} from '../model/'

@Injectable()
export class SupplierService {
    constructor(private http:Http) {}
    
    public getSuppliers() {
        return this.http.get('http://127.0.0.1:8000/api/fornecedores/')
        .map(res=> res.json());
    }
}