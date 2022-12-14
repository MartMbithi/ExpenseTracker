import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  /* Register You Url Here */
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

  /* Get Expense  */
  getExpense(id: number): Observable<Expense> {
    return this._httpClient
      .get<Expense>(`${this.getUrl}/${id}`)
      .pipe(map((response) => response));
  }

  /* Delete Expense */
  deleteExpense(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {
      responseType: 'text',
    });
  }
}
