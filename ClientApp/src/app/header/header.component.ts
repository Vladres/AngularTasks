import { Component, OnInit } from '@angular/core';
import { DialogOverviewExampleDialogComponent, DialogData } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { CardsService } from '../Services/cards.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Title: string = ''
  Text: string = ''

  constructor(public dialog: MatDialog, private cardServise: CardsService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '500px',
      data: { Title: this.Title, Text: this.Text }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.cardServise.addCard(result);
    });
  }

}
