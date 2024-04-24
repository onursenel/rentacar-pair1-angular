import { Pipe, type PipeTransform } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'appErrorMessageTs',
  standalone: true,
})
export class ErrorMessageTsPipe implements PipeTransform {

   
  transform(control: ValidationErrors | null | undefined, ...args: unknown[]): unknown {
    console.log("," , control);
    if (control?.["required"]) {
      return "This field is required";
    }
    if (control?.['minlength']) {
      return "This field should be minimum 3 characters";
    }
    return "Invalid input";
  }

}
