package com.isg.ws.olayRaporu;

import com.isg.ws.calisan.Calisan;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class OlayRaporu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String aciklama;
    private LocalDate olayTarihi;

    @ManyToOne
    @JoinColumn(name = "calisan_id")
    private Calisan raporlayan;
}
