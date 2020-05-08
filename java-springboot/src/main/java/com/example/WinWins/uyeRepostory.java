package com.example.WinWins;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface uyeRepostory extends JpaRepository<uye, Long> {

   // @Query(value = "Select * from uye", nativeQuery = true)
    //List<uye> getAll();
}
