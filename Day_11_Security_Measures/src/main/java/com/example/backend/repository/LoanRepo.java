package com.example.backend.repository;

import com.example.backend.model.LoanModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepo   extends JpaRepository<LoanModel, Integer>{

}
