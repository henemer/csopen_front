import {Http, Headers} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/Rx';
import {Supplier, SupplierFilter} from '../model'
import {Config} from '../service'


@Injectable()
export class SupplierService {
    public headers:Headers;
    public supplierFilter:SupplierFilter = new SupplierFilter();
    constructor(private http:Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json')
        this.supplierFilter = new SupplierFilter();
        this.supplierFilter.filterBy = '?company__icontains=';
        this.supplierFilter.filter = '';
        this.supplierFilter.filterAll = false;
    }

    public getSuppliers() {
        if(this.supplierFilter.filterAll==true) {
            this.supplierFilter.filterBy = '?company__icontains=';
            this.supplierFilter.filter = '';
        }

        return this.http.get(Config.BASE_URL+'/fornecedores/'+this.supplierFilter.filterBy+this.supplierFilter.filter)
            .map(res=> res.json());
    }

    public show(id) {
        return this.http.get(Config.BASE_URL+'/fornecedores/' + id)
            .map(res=> res.json());
    }

    public insert(s:Supplier) {
        return this.http
            .post(Config.BASE_URL+'/fornecedores/', JSON.stringify(s), { headers: this.headers } )
            .map(res => res.json());
    }

    public update(s:Supplier){
        return this.http
            .put(Config.BASE_URL+'/fornecedores/' + s.id, JSON.stringify(s), { headers: this.headers })
            .map(res => res.json());
    }

    public getMaxCode(s:Supplier) {
        return this.http
            .get(Config.BASE_URL+'/fornecedores/getmaxcode/').subscribe(response => s.code = parseInt(response.text()));

    }

    public delete(id) {
        return this.http
            .delete(Config.BASE_URL+'/fornecedores/' + id)
            .map(res => res.json());
    }

    public codeExists(id, code) {
        return this.http
            .get(Config.BASE_URL+'/fornecedores/codeexists/'+id+'/'+code).
            map(res => res.json());

    }
}