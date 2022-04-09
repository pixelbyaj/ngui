import { Component } from '@angular/core';
import { Card } from 'projects/workspace/src/lib/card.model';
import { ComponentModel } from 'projects/workspace/src/lib/shared/models/component.model';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  public cards: Card[] = [
    {
      id: "Card_1",
      component: new ComponentModel(TestComponent,{content: "test card 1"}),
      title: "Card 1"
    },
    {
      id: "Card_2",
      component: new ComponentModel(TestComponent,{content: "test card 2"}),
      title: "Card 2"
    },
    {
      id: "Card_3",
      component: new ComponentModel(TestComponent,{content: "test card 3"}),      
      title: "Card 3"
    },
    {
      id: "Card_4",
      component: new ComponentModel(TestComponent,{content: "test card 4"}),
      title: "Card 4"
    }
  ]
}
