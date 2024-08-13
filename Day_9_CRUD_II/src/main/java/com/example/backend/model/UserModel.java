package com.example.backend.model;

import org.springframework.beans.factory.annotation.Value;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String email;
    private String password;
    private String username;
    private String mobileNumber;
    private String userRole;
    @Value("${islogin:0}")
    private int islogin;
}
