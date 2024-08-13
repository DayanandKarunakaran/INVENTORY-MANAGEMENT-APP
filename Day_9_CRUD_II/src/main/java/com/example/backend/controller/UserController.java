package com.example.backend.controller;

import com.example.backend.model.UserModel;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/addUser")
    public ResponseEntity<UserModel> addUser(@RequestBody UserModel user) {
        UserModel addedUser = userService.addUser(user);
        return ResponseEntity.ok(addedUser);
    }

    @GetMapping("/getUser/{userId}")
    public ResponseEntity<UserModel> getUser(@PathVariable int userId) {
        UserModel user = userService.getUser(userId);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/editUser/{userId}")
    public ResponseEntity<UserModel> editUser(@PathVariable int userId, @RequestBody UserModel user) {
        UserModel editedUser = userService.editUser(userId, user);
        return ResponseEntity.ok(editedUser);
    }

    @DeleteMapping("/deleteUser/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable int userId) {
        userService.deleteUser(userId);
        return ResponseEntity.ok("User deleted successfully.");
    }

    @PostMapping("/isUserPresent")
    public ResponseEntity<UserModel> isUserPresent(@RequestBody UserModel data) {
        UserModel isPresent = userService.isUserPresent(data);
        return ResponseEntity.ok(isPresent);
    }

    @PutMapping("/updateLoginStatus/{userId}")
    public ResponseEntity<UserModel> updateLoginStatus(@PathVariable int userId, @RequestBody UserModel user) {
        UserModel updatedUser = userService.updateLoginStatus(userId, user);
        return ResponseEntity.ok(updatedUser);
    }


}
