import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  //Register Your Url Here
  private getUrl: string = 'http://127.0.0.1:8080/api/v1/expenses';
  constructor(private _httpClient: HttpClient) {}

  /* Fetch Expenses */
  getExpenses(): Observable<Expense[]> {
    return this._httpClient
      .get<Expense[]>(this.getUrl)
      .pipe(map((response) => response));
  }

  /* Save expense */
  saveExpense(expense: Expense): Observable<Expense> {
    return this._httpClient.post<Expense>(this.getUrl, expense);
  }
}
