package com.isg.ws.calisan.impl;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.CalisanRepository;
import com.isg.ws.calisan.dto.DtoCalisan;
import com.isg.ws.calisan.i.ICalisanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CalisanServiceİmpl implements ICalisanService {

    @Autowired
    CalisanRepository calisanRepository;

    private DtoCalisan dtoCalisan = new DtoCalisan();

    @Override
    public DtoCalisan save(Calisan calisan) {
        Calisan savedCalisan=calisanRepository.save(calisan);
        return dtoCalisan.toDTO(calisan);
    }
}
