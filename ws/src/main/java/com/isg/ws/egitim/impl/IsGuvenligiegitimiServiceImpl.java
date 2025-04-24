package com.isg.ws.egitim.impl;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.CalisanRepository;
import com.isg.ws.egitim.dto.DtoEgitim;
import com.isg.ws.egitim.EgitimRepository;
import com.isg.ws.egitim.IsGuvenligiEgitimi;
import com.isg.ws.egitim.i.IısGuvenligiegitimiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IsGuvenligiegitimiServiceImpl implements IısGuvenligiegitimiService {
    @Autowired
    EgitimRepository egitimRepository;

    @Autowired
    CalisanRepository calisanRepository;

    @Override
    public IsGuvenligiEgitimi save(DtoEgitim dtoEgitim) {
        IsGuvenligiEgitimi isGuvenligiEgitimi=new IsGuvenligiEgitimi();
        isGuvenligiEgitimi.setEgitimAdi(dtoEgitim.getEgitimAdi());
        isGuvenligiEgitimi.setEgitimTarihi(dtoEgitim.getEgitimTarihi());
        List<Calisan> calisanlar = calisanRepository.findAllById(dtoEgitim.getCalisanlar());

        for (Calisan calisan : calisanlar) {
            calisan.getEgitimler().add(isGuvenligiEgitimi);
        }

         return egitimRepository.save(isGuvenligiEgitimi);

    }

    @Override
    public List<IsGuvenligiEgitimi> findAll() {
        return egitimRepository.findAll();
    }
}
