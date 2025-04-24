package com.isg.ws.egitim.i;

import com.isg.ws.egitim.IsGuvenligiEgitimi;
import com.isg.ws.egitim.dto.DtoEgitim;

import java.util.List;

public interface IısGuvenligiegitimiService {
    IsGuvenligiEgitimi save(DtoEgitim dtoEgitim);

    List<IsGuvenligiEgitimi> findAll();
}
