package com.isg.ws.egitim;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.egitim.dto.DtoEgitim;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class IsGuvenligiEgitimi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String egitimAdi;
    private LocalDate egitimTarihi;

    @ManyToMany(mappedBy = "egitimler")
    private List<Calisan> calisanlar;

    public DtoEgitim toDTO() {
        return new DtoEgitim(
                this.egitimAdi,
                this.egitimTarihi
        );
    }
}
