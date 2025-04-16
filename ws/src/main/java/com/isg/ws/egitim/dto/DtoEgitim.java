package com.isg.ws.egitim.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoEgitim {
    private String egitimAdi;
    private LocalDate egitimTarihi;


}
