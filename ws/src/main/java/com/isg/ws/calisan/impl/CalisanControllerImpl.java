package com.isg.ws.calisan.impl;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.dto.DtoCalisan;
import com.isg.ws.calisan.i.ICalisanController;
import com.isg.ws.calisan.i.ICalisanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/calisanlar")
public class CalisanControllerImpl implements ICalisanController {
    @Autowired
    ICalisanService CalisanService;
    @Override
    @PostMapping("/kaydet")
    public DtoCalisan save(@RequestBody Calisan calisan) {
        return CalisanService.save(calisan);
    }
}
