import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/add/operator/map'
import {Supplier} from '../model/'
import {Config} from '../service'

@Injectable()
export class SupplierService {
    constructor(private http:Http) {}
    
    public getSuppliers() {
        return this.http.get(Config.BASE_URL+'fornecedores/')
        .map(res=> res.json());
    }
}