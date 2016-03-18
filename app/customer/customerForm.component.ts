import {Component, EventEmitter} from 'angular2/core'
import {Customer} from '../model'

@Component({
    selector:'customer-form',
    templateUrl: 'app/customer/customerForm.component.html',
    inputs:['customer'],
    outputs:['closeForm']
})
export class CustomerFormComponent{
    private closeForm = new EventEmitter();
    private editTitle:boolean = false;
    
    onTitleClick() {
        this.editTitle = true;
    }
    
    onButtonOkClick() {
        this.closeForm.next({});
    }
    
    ngOnChanges() {
        this.editTitle = false;
    }
    
}
