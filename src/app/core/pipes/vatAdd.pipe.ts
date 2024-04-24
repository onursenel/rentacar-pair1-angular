import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appVatAdd',
  standalone: true,
})
export class VatAddPipe implements PipeTransform {

  transform(value: number, rate: number): number {
    return value + (value*rate/100);
  }

}
