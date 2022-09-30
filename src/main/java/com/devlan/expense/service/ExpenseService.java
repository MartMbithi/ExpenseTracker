package com.devlan.expense.service;

import java.util.List;

import com.devlan.expense.model.Expense;

public interface ExpenseService {

    List<Expense>findAll();
}
