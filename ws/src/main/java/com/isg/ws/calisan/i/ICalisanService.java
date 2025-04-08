package com.isg.ws.calisan.i;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.dto.DtoCalisan;

import java.util.List;

public interface ICalisanService {
public DtoCalisan save(Calisan calisan);

    List<Calisan> findAll();

    void deleteById(Long id);
}
