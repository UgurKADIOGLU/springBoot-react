package com.isg.ws.ekipman.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EkipmanUpdateDTO {
    private Long id;
    private String ekipmanAdi;
    private String seriNumarasi;
    private LocalDate sonMuayeneTarihi;
}
