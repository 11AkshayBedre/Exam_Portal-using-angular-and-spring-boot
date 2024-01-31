package com.example.Backend.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Users")
//@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "role"})
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userID;

    @Column(unique = true,length = 20)
    private String userName;

    @Column(length = 100)
    private String password;

    @Column(length = 30)
    private String firstName;

    @Column(length = 30)
    private String lastName;

    @Column(unique = true,length = 30)
    private String emailId;

    @Column(length = 10)
    private String contactNo;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name ="roleID")
    private Role role;
}
