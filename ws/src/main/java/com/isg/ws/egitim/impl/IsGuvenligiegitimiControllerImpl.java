package com.isg.ws.egitim.impl;

import com.isg.ws.egitim.dto.DtoEgitim;
import com.isg.ws.egitim.IsGuvenligiEgitimi;
import com.isg.ws.egitim.i.IısGuvenligiegitimiController;
import com.isg.ws.egitim.i.IısGuvenligiegitimiService;
import com.isg.ws.shared.GenericMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/egitim")
public class IsGuvenligiegitimiControllerImpl implements IısGuvenligiegitimiController {
    @Autowired
    IısGuvenligiegitimiService isGuvenligiegitimiService;
    @Override

    @PostMapping("/kaydet")
    public GenericMessage save(@RequestBody DtoEgitim dtoEgitim) {
        isGuvenligiegitimiService.save(dtoEgitim);
        return new GenericMessage("Eğitim kayıt edildi");
    }

    @Override
    public List<IsGuvenligiEgitimi> findAll() {
        return List.of();
    }
}
