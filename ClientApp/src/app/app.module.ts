import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import { FormsModule } from '@angular/forms';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { CardsService } from './Services/cards.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents:[
    DialogOverviewExampleDialogComponent
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
