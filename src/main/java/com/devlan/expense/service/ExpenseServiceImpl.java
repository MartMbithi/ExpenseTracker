package com.devlan.expense.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.devlan.expense.model.Expense;
import com.devlan.expense.repository.ExpenseRepository;

public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    ExpenseRepository expenseRepository;
    @Override
    public List<Expense> findAll() {
        
        return expenseRepository.findAll();
    }

}
