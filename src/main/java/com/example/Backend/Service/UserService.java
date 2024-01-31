package com.example.Backend.Service;

import com.example.Backend.Dto.UserDto;
import com.example.Backend.Entity.Users;
import com.example.Backend.Repository.RoleRepository;
import com.example.Backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    RoleRepository roleRepository;

    public Users addUser(UserDto userDto) {
        Users users = new Users();
        users.setUserName(userDto.getUserName());
        users.setPassword(passwordEncoder.encode(userDto.getPassword()));
        users.setContactNo(userDto.getContactNo());
        users.setFirstName(userDto.getFirstName());
        users.setEmailId(userDto.getEmailId());
        users.setLastName(userDto.getLastName());
        users.setRole(roleRepository.getReferenceById(userDto.getRoleID()));
        return userRepository.save(users);
    }

    public List<Users> getUsers() {
        return userRepository.findAll();
    }



    public Users getUser1(String userName ,String password) throws Exception {
        Users user= userRepository.findByUserName(userName);
        if(passwordEncoder.matches(password,user.getPassword())){
            return user;
        }
        else {
            throw new Exception("user not found");
        }
    }

    public long getUserRole(String userName, String password) {
        Users user= userRepository.findByUserName(userName);
        if(passwordEncoder.matches(password,user.getPassword())){
            return user.getRole().getRoleID();
        }
        else {
            return 0;
        }
    }
}
