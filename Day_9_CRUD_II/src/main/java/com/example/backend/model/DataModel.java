package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class DataModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dataId;
    private String dataName;
    private String dataDescription;
    private String dataImageUrl;
    
}
