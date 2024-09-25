package com.path.demo.services;

import com.path.demo.models.User;
import com.path.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createNewUser(User username) {
        return userRepository.save(username);
    }

    public List<User> getAllUser() {

        return userRepository.findAll();
    }

    public User findUserById(Long user_id) {
        return userRepository.getById(user_id);
    }

    public User findUserByUsername(String username) {
        return userRepository.getByUsername(username);
    }

    public User updateUser(User username){
        return userRepository.save(username);
    }
}
