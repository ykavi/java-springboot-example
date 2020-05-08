package com.example.WinWins;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class uyeService {

    public List<uye> get;
    @Autowired
    uyeRepostory uyeRepostory;

    public List<uye> getUye() {
        return uyeRepostory.findAll();
    }

    public uye savePerson(uye uyem) {

        BCryptPasswordEncoder abc = new BCryptPasswordEncoder();
        uyem.setPassword(abc.encode(uyem.getPassword()));
        return uyeRepostory.save(uyem);
    }
}
