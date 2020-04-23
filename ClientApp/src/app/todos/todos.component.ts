import { Component, OnInit } from '@angular/core';
import { CardsService } from '../Services/cards.service';
import { DialogData } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  cards: DialogData[];
  constructor(private cardServise: CardsService) { }

  ngOnInit(): void {
    this.cardServise.getCards().subscribe(cards => this.cards = cards);
  }

  clickEvent(index: number) {
    this.cardServise.removeCard(index);
  }
}
