package com.isg.ws.calisan.impl;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.dto.DtoCalisan;
import com.isg.ws.calisan.i.ICalisanController;
import com.isg.ws.calisan.i.ICalisanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calisanlar")
public class CalisanControllerImpl implements ICalisanController {

    @Autowired
    ICalisanService calisanService;

    @CrossOrigin
    @Override
    @PostMapping("/kaydet")
    public DtoCalisan save(@RequestBody Calisan calisan) {
        return calisanService.save(calisan);
    }

    @Override
    @GetMapping("/getir")
    public List<Calisan> findAll() {
        return calisanService.findAll();
    }

    @Override
    @DeleteMapping("/sil/{id}")
    public void deleteById(@PathVariable Long id) {
        calisanService.deleteById(id);
    }
}
