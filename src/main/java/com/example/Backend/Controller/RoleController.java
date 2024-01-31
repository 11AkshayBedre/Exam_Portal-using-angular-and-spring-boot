package com.example.Backend.Controller;

import com.example.Backend.Dto.RoleDto;
import com.example.Backend.Entity.Role;
import com.example.Backend.Repository.RoleRepository;
import com.example.Backend.Service.RoleService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RoleController {
    @Autowired
    RoleService roleService;

    @PostMapping("/role")
    public Role addRole(@RequestBody @Valid RoleDto roleDto){
        return roleService.addRole(roleDto);
    }

    @GetMapping("/role")
    public List<Role> getRole(){
        return roleService.getRole();
    }
}
