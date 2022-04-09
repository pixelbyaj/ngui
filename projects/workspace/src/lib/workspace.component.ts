import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Card } from './card.model';

@Component({
  selector: 'ws-card',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {
  @Input() cards: Card[];
  @Output() onCloseEvent: EventEmitter<any> = new EventEmitter<any>();
  public rowCardsLeft: Card[]
  public rowCardsRight: Card[]
  constructor() {
    this.rowCardsLeft = [];
    this.rowCardsRight = [];
    
  }

  ngOnInit(): void {
    let _index: number = 0;
    for (let i = _index; i < this.cards.length; i++) {
      if (i === 2) {
        break;
      }
      this.rowCardsLeft.push({ ...this.cards[i] });
      _index = i;
    }

    if (this.cards.length > _index) {
      for (let i = _index + 1; i < this.cards.length; i++) {
        this.rowCardsRight.push({ ...this.cards[i] });
      }
    }
  }

  onClose($event: any, card: Card) {
    const payload = {
      $event: $event,
      card: card
    }
    if (this.cards.length > 1) {
      let index = this.rowCardsLeft.findIndex((item) => {
        return item.id === card.id;
      });
      if (index > -1) {
        this.rowCardsLeft.splice(index, 1);
      } else {
        index = this.rowCardsRight.findIndex((item) => {
          return item.id === card.id;
        });
        if (index > -1) {
          this.rowCardsRight.splice(index, 1);
        }
      }
      this.cards = [...this.rowCardsLeft, ...this.rowCardsRight];
    }
    this.onCloseEvent.emit(payload);
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      transferArrayItem(
        event.container.data,
        event.previousContainer.data,
        event.currentIndex + 1,
        event.previousIndex,
      );
    }
  }

}
