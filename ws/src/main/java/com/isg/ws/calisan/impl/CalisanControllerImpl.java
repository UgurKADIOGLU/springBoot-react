package com.isg.ws.calisan.impl;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.dto.DtoCalisan;
import com.isg.ws.calisan.i.ICalisanController;
import com.isg.ws.calisan.i.ICalisanService;
import com.isg.ws.shared.GenericMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calisanlar")
public class CalisanControllerImpl implements ICalisanController {

    @Autowired
    ICalisanService calisanService;

    @Override
    @PostMapping("/kaydet")
    public GenericMessage save(@RequestBody Calisan calisan) {

        calisanService.save(calisan);
        return new GenericMessage("Calisan kayit edildi");
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
