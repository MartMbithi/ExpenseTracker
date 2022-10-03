package com.devlan.expense.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devlan.expense.model.Expense;
import com.devlan.expense.service.ExpenseService;
 
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class ExpenseController {
    @Autowired
    ExpenseService expenseService;
    
    @GetMapping("/expenses")
    public ResponseEntity<List<Expense>> get(){
        List<Expense> expenses = expenseService.findAll();   
        return new ResponseEntity<List<Expense>>(expenses, HttpStatus.OK);
        
    }
    
    @PostMapping("/expenses")
    public ResponseEntity<Expense> save(@RequestBody Expense expense){
        Expense expensesOne = expenseService.save(expense);   
        return new ResponseEntity<Expense>(expensesOne, HttpStatus.OK);
        
    }
    
    
}
