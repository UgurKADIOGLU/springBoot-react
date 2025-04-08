package com.isg.ws.calisan.i;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.dto.DtoCalisan;

public interface ICalisanRepository {
    public DtoCalisan save(DtoCalisan dtoCalisan);
}
