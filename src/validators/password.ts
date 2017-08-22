import { FormControl } from '@angular/forms';

export class PasswordValidator {
    
    static isValid(control: FormControl): any {
        
        if(control.value !== control.value.password){
            
            return {
                "passwords do not match": true
            };
        }
        return null;
    }
}