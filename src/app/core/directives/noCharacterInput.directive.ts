import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appNoCharacterInput]',
  standalone: true,
})
export class NoCharacterInputDirective{
  constructor(private element: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event) {
    const initialValue = this.element.nativeElement.value;
    this.element.nativeElement.value = initialValue.replace(/[0-9]/g, ''); // Sadece rakam karakterlerini tutmayacak şekilde input alanını günceller
    if (initialValue !== this.element.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
