package com.example.Backend.Controller;

import com.example.Backend.Dto.UserDto;
import com.example.Backend.Entity.Users;
import com.example.Backend.Repository.RoleRepository;
import com.example.Backend.Repository.UserRepository;
import com.example.Backend.Service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;


//    @PostMapping("/user")
//    public Users addUser(@RequestBody @Valid UserDto userDto){
//        return userService.addUser(userDto);
//    }

    @PostMapping("/user")
    public ResponseEntity<?> createUser(@RequestBody UserDto userDto) {
        // Your logic to process the userDto and save it
        Users users = new Users();
        users.setUserName(userDto.getUserName());
        users.setPassword(passwordEncoder.encode(userDto.getPassword()));
        users.setContactNo(userDto.getContactNo());
        users.setFirstName(userDto.getFirstName());
        users.setEmailId(userDto.getEmailId());
        users.setLastName(userDto.getLastName());
        users.setRole(roleRepository.getReferenceById(userDto.getRoleID()));
        Users users1=userRepository.save(users);
        return ResponseEntity.ok("User created successfully");
    }

    @GetMapping("/user")
    public List<Users> getUsers(){
        return userService.getUsers();
    }

    @GetMapping("/user/{userName}/{password}")
    public Users getUser(@PathVariable String userName,@PathVariable String password) throws Exception {
        return userService.getUser1(userName,password);
    }

    @GetMapping("/userRole/{userName}/{password}")
    public long getUserRole(@PathVariable String userName,@PathVariable String password){
        return userService.getUserRole(userName,password);
    }

}
