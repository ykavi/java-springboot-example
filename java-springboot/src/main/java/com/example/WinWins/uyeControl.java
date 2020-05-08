package com.example.WinWins;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.web.bind.annotation.*;

import java.security.PublicKey;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class uyeControl {

    @Autowired
    private TokenStore tokenStore;

    private String LOGIN_URL = "http://localhost:8080/oauth/token?";

    @Autowired
    uyeService uyeService;

    @GetMapping("/list")
    public List<uye> getUye() {
        return uyeService.getUye();
    }

    @PostMapping("/kayit")
    public uye savePerson(@RequestBody uye uye) {
        return uyeService.savePerson(uye);
    }
}
