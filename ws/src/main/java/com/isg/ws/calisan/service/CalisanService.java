package com.isg.ws.calisan.service;

import com.isg.ws.calisan.entity.Calisan;
import com.isg.ws.calisan.repository.CalisanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CalisanService {
    @Autowired
    CalisanRepository calisanRepository;

    PasswordEncoder passwordEncoder=new BCryptPasswordEncoder();

    public void save(Calisan calisan) {
        calisan.setAd(passwordEncoder.encode(calisan.getAd()));
        calisanRepository.save(calisan
        );
    }
}
