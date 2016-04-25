///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {Http, HTTP_PROVIDERS} from 'angular2/http'
import {provide, ExceptionHandler} from 'angular2/core'
import {ROUTER_PROVIDERS, RouteConfig, LocationStrategy,
  HashLocationStrategy} from 'angular2/router'


export interface IExceptionHandler {
    call(exception: any, stackTrace?: any, reason?: string): void;
}

//export class MyExceptionHandler implements IExceptionHandler {
    // call(exception: any, stackTrace: any, reason: string): void {
    //     console.log(exception);
    //     alert('Não foi possível processar a sua requisição, verifique a conexão com a internet e tente novamente');
    // }
// }


bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  //  provide(ExceptionHandler, {useClass:MyExceptionHandler})
]);