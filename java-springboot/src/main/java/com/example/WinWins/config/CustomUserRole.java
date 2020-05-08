package com.example.WinWins.config;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
@AllArgsConstructor
@NoArgsConstructor
public class CustomUserRole implements GrantedAuthority {

    @Id
    @Column(name = "role_id")
    private Integer roleId;

    @Column(name = "role_name")
    private String roleName;

    @Override
    public String getAuthority() {
        return this.roleId.toString();
    }
}
