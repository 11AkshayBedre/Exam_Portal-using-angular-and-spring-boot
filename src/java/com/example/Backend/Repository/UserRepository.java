package com.example.Backend.Repository;

import com.example.Backend.Entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users,Long> {
    public  Users findByUserName(String userName);
    public Users findByUserNameAndPassword(String userName,String password);
}
