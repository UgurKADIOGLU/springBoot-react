package com.isg.ws.calisan.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import com.isg.ws.egitim.IsGuvenligiEgitimi;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Calisan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String ad;
    private String pozisyon;
    private String departman;
    private String eposta;
    @ManyToMany
    @JsonIgnore
    @JoinTable(
            name = "calisan_egitim",
            joinColumns = @JoinColumn(name = "calisan_id"),
            inverseJoinColumns = @JoinColumn(name = "egitim_id"))
    private List<IsGuvenligiEgitimi> egitimler;


    // Getters & Setters
}
