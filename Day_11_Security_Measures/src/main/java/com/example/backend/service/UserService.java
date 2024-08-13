package com.example.backend.service;

import com.example.backend.model.UserModel;
// import com.example.backend.model.LoginModel;
import com.example.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    public UserModel isUserPresent(UserModel data) {
        UserModel user = userRepository.findByEmail(data.getEmail());
        if(user != null && user.getPassword().equals(data.getPassword())){
            return user;
        }
        return null;
    }

    public UserModel addUser(UserModel user) {
        return userRepository.save(user);
    }

    public UserModel getUser(int userId) {
        return userRepository.findById(userId).orElse(null);
    }

    public UserModel editUser(int userId, UserModel user) {
        user.setUserId(userId);
        return userRepository.save(user);
    }

    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }

    public UserModel updateLoginStatus(int userId, UserModel user) {
        UserModel existingUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        existingUser.setIslogin(user.getIslogin());
        return userRepository.save(existingUser);
    }
    
}
