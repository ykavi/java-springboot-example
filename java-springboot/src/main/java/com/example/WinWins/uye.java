package com.example.WinWins;

import lombok.Data;


import javax.persistence.*;

@Entity
@Table(name = "tbl_uye")
@Data
public class uye {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String surname;
    private String email;
    private String password;
}

