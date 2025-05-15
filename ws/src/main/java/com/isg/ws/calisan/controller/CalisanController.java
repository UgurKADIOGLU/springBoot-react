package com.isg.ws.calisan.controller;


import com.isg.ws.calisan.entity.Calisan;
import com.isg.ws.calisan.service.CalisanService;
import com.isg.ws.shares.GenericMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CalisanController {

    @Autowired
    CalisanService calisanService;

    @PostMapping("/api/v1/calisan")
    GenericMessage createCalisan(@RequestBody Calisan calisan) {
        calisanService.save(calisan);
        return new GenericMessage("calisan is created");
    }
}
