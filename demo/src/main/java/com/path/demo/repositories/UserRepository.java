package com.path.demo.repositories;

import com.path.demo.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface UserRepository extends JpaRepository<User, Long> {
    public User findByUsername(String username);
    public List<User> findAll();
    public User getById(Long user_id);
    public User getByUsername(String username);
}
