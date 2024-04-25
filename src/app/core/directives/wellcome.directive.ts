import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription, take, timer } from 'rxjs';

@Directive({
  selector: '[appWellcome]',
  standalone: true,
})
export class WellcomeDirective {
  @Input('appWelcomeThen') content!: any;
  @Input('appWelcome') set delay(time: number) {
    setTimeout(() => {
      this.viewContainer.clear();
      document.getElementById('welcome')?.remove();
      this.viewContainer.createEmbeddedView(this.template);
      this.viewContainer.clear();
    }, time);
  }

  constructor(
    private template: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
 }
