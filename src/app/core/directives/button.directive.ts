import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit{
  
  constructor(private element:ElementRef<HTMLElement> , private renderer: Renderer2){}
  
  ngOnInit(): void {

    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid #ccc');
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '5px');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#0000FF');
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');

    // Mouse üzerine gelindiğinde arka plan rengini değiştirme
    this.renderer.listen(this.element.nativeElement, 'mouseenter', () => {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', '#D2691E');
    });

    // Mouse üzerinden ayrıldığında arka plan rengini eski haline getirme
    this.renderer.listen(this.element.nativeElement, 'mouseleave', () => {
      this.renderer.setStyle(this.element.nativeElement, 'background-color', '#0000FF');
    });
  }
}

