import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css'],
})
export class ListExpenseComponent implements OnInit {
  expenses: Expense[] = [];

  filters = {
    keyword: '',
  };

  constructor(private _expenseService: ExpenseService) {}

  ngOnInit(): void {
    this._expenseService
      .getExpenses()
      .subscribe((data) => (this.expenses = data));
  }

  //List Expenses
  listExpenes() {
    this._expenseService
      .getExpenses()
      .subscribe((data) => (this.expenses = this.filterExpenses(data)));
  }

  //Filter Expenses
  filterExpenses(expenses: Expense[]) {
    return expenses.filter((e) => {
      return e.expense
        .toLocaleLowerCase()
        .includes(this.filters.keyword.toLocaleLowerCase());
    });
  }
}
