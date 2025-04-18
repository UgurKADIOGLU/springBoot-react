package com.isg.ws.egitim.impl;

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
    @Override
    public DtoEgitim save(DtoEgitim dtoEgitim) {
        IsGuvenligiEgitimi isGuvenligiEgitimi=new IsGuvenligiEgitimi();
        isGuvenligiEgitimi.setEgitimAdi(dtoEgitim.getEgitimAdi());
        isGuvenligiEgitimi.setEgitimTarihi(dtoEgitim.getEgitimTarihi());

         egitimRepository.save(isGuvenligiEgitimi);
         return dtoEgitim;

    }

    @Override
    public List<IsGuvenligiEgitimi> findAll() {
        return egitimRepository.findAll();
    }
}
