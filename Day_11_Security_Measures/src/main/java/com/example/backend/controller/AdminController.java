package com.example.backend.controller;

import com.example.backend.model.AdminModel;
// import com.example.backend.model.DocumentModel;
import com.example.backend.model.LoanModel;
import com.example.backend.service.AdminService;
import com.example.backend.service.LoanService;
// import com.example.backend.service.RepaymentScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private LoanService loanService;

    // @Autowired
    // private RepaymentScheduleService repaymentScheduleService;

    @PostMapping("/approveLoan")
    public ResponseEntity<LoanModel> approveLoan(@RequestBody LoanModel loan) {
        LoanModel approvedLoan = adminService.approveLoan(loan);
        return ResponseEntity.ok(approvedLoan);
    }

    // @PostMapping("/verifyDocuments")
    // public ResponseEntity<Boolean> verifyDocuments(@RequestBody DocumentModel document) {
    //     boolean isVerified = adminService.verifyDocuments(document);
    //     return ResponseEntity.ok(isVerified);
    // }

    @PutMapping("/editLoan/{loanId}")
    public ResponseEntity<LoanModel> editLoan(@PathVariable int loanId, @RequestBody LoanModel loan) {
        LoanModel editedLoan = loanService.editLoan(loanId, loan);
        return ResponseEntity.ok(editedLoan);
    }

    @DeleteMapping("/deleteLoan/{loanId}")
    public ResponseEntity<String> deleteLoan(@PathVariable int loanId) {
        loanService.deleteLoan(loanId);
        return ResponseEntity.ok("Loan deleted successfully.");
    }

    @PostMapping("/isAdminPresent")
    public ResponseEntity<Boolean> isAdminPresent(@RequestBody AdminModel data) {
        boolean isPresent = adminService.isAdminPresent(data);
        return ResponseEntity.ok(isPresent);
    }

    /*@GetMapping("/generateSchedule/{loanId}")
    public ResponseEntity<String> generateSchedule(@PathVariable Long loanId) {
        String schedule = repaymentScheduleService.generateSchedule(loanId);
        return ResponseEntity.ok(schedule);
    }

    @PutMapping("/editSchedule/{loanId}")
    public ResponseEntity<String> editSchedule(@PathVariable Long loanId, @RequestBody String schedule) {
        String editedSchedule = repaymentScheduleService.editSchedule(loanId, schedule);
        return ResponseEntity.ok(editedSchedule);
    }

    @DeleteMapping("/deleteSchedule/{loanId}")
    public ResponseEntity<String> deleteSchedule(@PathVariable Long loanId) {
        repaymentScheduleService.deleteSchedule(loanId);
        return ResponseEntity.ok("Schedule deleted successfully.");
    }*/
}
