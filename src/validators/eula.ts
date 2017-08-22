import { FormControl } from '@angular/forms';

export class EulaValidator {
    
    static isValid(control: FormControl): any {
        
        if(control.value == false){
            
            return {
                "EULA not accepted": true
            };
        }
        return null;
    }
}