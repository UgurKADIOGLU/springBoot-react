package com.isg.ws.egitim.impl;

import com.isg.ws.egitim.dto.DtoEgitim;
import com.isg.ws.egitim.IsGuvenligiEgitimi;
import com.isg.ws.egitim.i.IısGuvenligiegitimiController;
import com.isg.ws.egitim.i.IısGuvenligiegitimiService;
import com.isg.ws.shared.GenericMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    @GetMapping("/getir")
    public List<IsGuvenligiEgitimi> findAll() {

        return isGuvenligiegitimiService.findAll();
    }
}
