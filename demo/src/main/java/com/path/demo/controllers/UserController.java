package com.path.demo.controllers;

import com.path.demo.models.User;
import com.path.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/api/v1/users")


public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUsers() {

        return ResponseEntity.ok(userService.getAllUser());
    }

    @PostMapping("/")
    public ResponseEntity<User> createUser(@RequestBody User username) {
        return ResponseEntity.ok(userService.createNewUser(username));
    }
}
