package com.isg.ws.calisan.impl;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.CalisanRepository;
import com.isg.ws.calisan.dto.DtoCalisan;
import com.isg.ws.calisan.i.ICalisanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalisanServiceİmpl implements ICalisanService {

    @Autowired
    CalisanRepository calisanRepository;

    @Override
    public DtoCalisan save(Calisan calisan) {
        return calisanRepository.save(calisan).toDTO();
    }

    @Override
    public List<Calisan> findAll() {
        return calisanRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        calisanRepository.deleteById(id);
    }
}
