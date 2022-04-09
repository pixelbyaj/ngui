import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { CardDirective } from '../../directives/card-content.directive';
import { ComponentModel } from '../../models/component.model';

@Component({
  selector: 'ws-dynamic',
  template: `<div><ng-template cardContent></ng-template></div>`
})
export class DynamicComponent implements OnInit {

  @Input() cardModel: ComponentModel;
  @ViewChild(CardDirective, { static: true }) cardContent!: CardDirective;
  constructor() { }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent() {
    const viewContainerRef = this.cardContent.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<any>(this.cardModel.component);
    if (this.cardModel.prop) {
      Object.assign(componentRef.instance, this.cardModel.prop);
    }
  }
}
