package com.example.backend.service;

import com.example.backend.model.LoanModel;
import com.example.backend.repository.LoanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {

    @Autowired
    private LoanRepo loanRepository;

    public LoanModel addLoan(LoanModel loan) {
        return loanRepository.save(loan);
    }

    public LoanModel editLoan(int loanId, LoanModel loan) {
        loan.setLoanId(loanId);
        return loanRepository.save(loan);
    }

    public List<LoanModel> getLoans() {
        return loanRepository.findAll();
    }

    public void deleteLoan(int loanId) {
        loanRepository.deleteById(loanId);
    }
}
