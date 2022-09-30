package com.devlan.expense.service;

import java.util.List;

import com.devlan.expense.model.Expense;

public interface ExpenseService {

    //Get All Expenses
    List<Expense>findAll();
    
    //Save New Expense
    Expense save(Expense expense);
}
