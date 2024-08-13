package com.example.backend.repository;

import com.example.backend.model.DataModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DataRepo extends JpaRepository<DataModel,Integer> {

}
