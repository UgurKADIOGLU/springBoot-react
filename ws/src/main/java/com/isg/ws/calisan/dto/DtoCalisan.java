package com.isg.ws.calisan.dto;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.egitim.IsGuvenligiEgitimi;
import com.isg.ws.olayRaporu.OlayRaporu;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DtoCalisan {
    private Long id;
    private String ad;
    private String pozisyon;
    private String departman;
    private String eposta;

    public DtoCalisan toDTO(Calisan calisan) {
        return new DtoCalisan(
                this.id=calisan.getId(),
                this.ad= calisan.getAd(),
                this.pozisyon= calisan.getPozisyon(),
                this.departman=calisan.getDepartman(),
                this.eposta= calisan.getEposta()
        );
    }


}
