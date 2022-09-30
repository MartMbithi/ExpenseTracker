package com.devlan.expense.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devlan.expense.model.Expense;
import com.devlan.expense.repository.ExpenseRepository;
 
@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    ExpenseRepository expenseRepository;
    @Override
    public List<Expense> findAll() {
        
        return expenseRepository.findAll();
    }
    
    @Override
    public Expense save(Expense expense) {
        expenseRepository.save(expense);
        return expense;
    }

}
