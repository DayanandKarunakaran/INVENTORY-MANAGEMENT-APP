package com.example.backend.service;

import com.example.backend.model.AdminModel;
// import com.example.backend.model.DocumentModel;
import com.example.backend.model.LoanModel;
// import com.example.backend.model.LoginModel;
import com.example.backend.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepository;

    public boolean isAdminPresent(AdminModel data) {
        AdminModel admin = adminRepository.findByEmail(data.getEmail());
        return admin != null && admin.getPassword().equals(data.getPassword());
    }

    public AdminModel saveAdmin(AdminModel admin) {
        return adminRepository.save(admin);
    }

    public LoanModel approveLoan(LoanModel loan) {
        // Logic to approve loan
        return loan;
    }

    // public boolean verifyDocuments(DocumentModel document) {
    //     // Logic to verify documents
    //     return true;
    // }
}