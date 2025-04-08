package com.isg.ws.muayene;

import com.isg.ws.ekipman.Ekipman;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Muayene {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate muayeneTarihi;
    private String muayeneEden;
    private String notlar;

    @ManyToOne
    @JoinColumn(name = "ekipman_id")
    private Ekipman ekipman;
}
