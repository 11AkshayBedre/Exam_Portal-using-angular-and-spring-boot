package com.example.Backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private String userName;
    private String firstName;
    private String lastName;
    private String emailId;
    private String contactNo;
    private long roleID;
    private String password;
}
