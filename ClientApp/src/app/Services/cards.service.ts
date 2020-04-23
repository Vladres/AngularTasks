import { Injectable } from '@angular/core';
import { DialogData } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  
  cards: DialogData[] = [
    { Title: "Title" + 1, Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
    { Title: "Title" + 2, Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
    { Title: "Title" + 3, Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
    { Title: "Title" + 4, Text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. " },
  ]

  getCards(): Observable<DialogData[]> {
    return of(this.cards);
  }

  addCard(value: DialogData): void {
    this.cards.push(value);
  }

  removeCard(index: number) {
    this.cards.splice(index, 1)
  }
  constructor() { }
}
