package com.example.WinWins.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {


    @Autowired
    CustomUserDetailRepository customUserDetailRepository;

    @Override
    public CustomUserDetails loadUserByUsername(String userName) {
        return customUserDetailRepository.findByUsername(userName);
    }
}
