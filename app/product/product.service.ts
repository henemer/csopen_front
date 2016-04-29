import {Http, Headers} from 'angular2/http'
import {Injectable} from 'angular2/core'
import 'rxjs/Rx';
import {Product, ProductFilter} from '../model'
import {Config} from '../service'


@Injectable()
export class ProductService {
    public headers:Headers;
    public productFilter:ProductFilter = new ProductFilter();
    constructor(private http:Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json')
        this.productFilter = new ProductFilter();
        this.productFilter.filterBy = '?description__icontains=';
        this.productFilter.filter = '';
        this.productFilter.filterAll = false;
    }

    public getProducts() {
        if(this.productFilter.filterAll==true) {
            this.productFilter.filterBy = '?description__icontains=';
            this.productFilter.filter = '';
        }

        return this.http.get(Config.BASE_URL+'/produtos/'+this.productFilter.filterBy+this.productFilter.filter)
             .map(res=> res.json());

    }

    public show(id) {
        return this.http.get(Config.BASE_URL+'/produtos/' + id)
            .map(res=> res.json());
    }

    public insert(p:Product) {
        return this.http
            .post(Config.BASE_URL+'/produtos/', JSON.stringify(p), { headers: this.headers } )
            .map(res => res.json());
    }

    public update(p:Product){
        return this.http
            .put(Config.BASE_URL+'/produtos/' + p.id, JSON.stringify(p), { headers: this.headers })
            .map(res => res.json());
    }

    public delete(id) {
        return this.http
            .delete(Config.BASE_URL+'/produtos/' + id)
            .map(res => res.json());
    }

    public codeExists(id, code) {
        return this.http
            .get(Config.BASE_URL+'/produtos/codeexists/'+id+'/'+code).
            map(res => res.json());

    }
}