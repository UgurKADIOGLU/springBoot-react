package com.isg.ws.egitim.i;

import com.isg.ws.egitim.dto.DtoEgitim;
import com.isg.ws.egitim.IsGuvenligiEgitimi;
import com.isg.ws.shared.GenericMessage;

import java.util.List;

public interface IısGuvenligiegitimiController {
    public GenericMessage save(DtoEgitim dtoEgitim);
    public List<IsGuvenligiEgitimi> findAll();
}
