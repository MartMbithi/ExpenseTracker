import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListExpenseComponent } from './components/list-expense/list-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    ListExpenseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
