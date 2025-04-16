package com.isg.ws.egitim;

import com.isg.ws.calisan.dto.DtoCalisan;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoEgitim {
    private String egitimAdi;
    private String egitimTarihi;


}
