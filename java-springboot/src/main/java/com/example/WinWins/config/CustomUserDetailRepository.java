package com.example.WinWins.config;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomUserDetailRepository extends JpaRepository<CustomUserDetails, Long> {

     CustomUserDetails findByUsername(String userName);

}
