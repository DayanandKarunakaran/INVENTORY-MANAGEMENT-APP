package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class LoanModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int loanId;
    private String loanType;
    private String applicantName;
    private String applicantAddress;
    private String applicantMobile;
    private String applicantEmail;
    private String applicantAadhaar;
    private String applicantPan;
    private String applicantSalary;
    private String loanAmountRequired;
    private String loanRepaymentMonths;

}
