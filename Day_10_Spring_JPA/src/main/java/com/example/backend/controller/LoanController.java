package com.example.backend.controller;

import com.example.backend.model.LoanModel;
import com.example.backend.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loan")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @PostMapping("/addLoan")
    public ResponseEntity<LoanModel> addLoan(@RequestBody LoanModel loan) {
        LoanModel addedLoan = loanService.addLoan(loan);
        return ResponseEntity.ok(addedLoan);
    }

    @PutMapping("/editLoan/{loanId}")
    public ResponseEntity<LoanModel> editLoan(@PathVariable int loanId, @RequestBody LoanModel loan) {
        LoanModel editedLoan = loanService.editLoan(loanId, loan);
        return ResponseEntity.ok(editedLoan);
    }

    @GetMapping("/getLoans")
    public ResponseEntity<List<LoanModel>> getLoans() {
        List<LoanModel> loans = loanService.getLoans();
        return ResponseEntity.ok(loans);
    }

    @DeleteMapping("/deleteLoan/{loanId}")
    public ResponseEntity<String> deleteLoan(@PathVariable int loanId) {
        loanService.deleteLoan(loanId);
        return ResponseEntity.ok("Loan deleted successfully.");
    }
}
