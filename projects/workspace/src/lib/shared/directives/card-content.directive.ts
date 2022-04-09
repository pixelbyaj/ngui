import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cardContent]',
})
export class CardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}