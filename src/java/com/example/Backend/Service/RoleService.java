package com.example.Backend.Service;

import com.example.Backend.Dto.RoleDto;
import com.example.Backend.Entity.Role;
import com.example.Backend.Repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;
    public Role addRole(RoleDto roleDto) {
        Role role = new Role();
        role.setRoleName(roleDto.getRoleName());
        return roleRepository.save(role);
    }

    public List<Role> getRole() {
        return roleRepository.findAll();
    }
}
