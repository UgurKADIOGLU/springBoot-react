package com.isg.ws.ekipman.impl;

import com.isg.ws.ekipman.Ekipman;
import com.isg.ws.ekipman.dto.EkipmanUpdateDTO;
import com.isg.ws.ekipman.i.IEkipmanController;
import com.isg.ws.ekipman.i.IEkipmanService;
import com.isg.ws.shared.GenericMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/ekipman")
@RequiredArgsConstructor
public class EkipmanController implements IEkipmanController {

    private final IEkipmanService ekipmanService;

    @Override
    @PostMapping("/kaydet")
    public GenericMessage save(@RequestBody Ekipman ekipman) {
        ekipmanService.save(ekipman);
        return new GenericMessage("Ekipman başarıyla kaydedildi");
    }

    @Override
    @GetMapping("/listele")
    public List<Ekipman> findAll() {
        return ekipmanService.findAll();
    }

    @Override
    @GetMapping("/{id}")
    public Ekipman findById(@PathVariable Long id) {
        return ekipmanService.findById(id);
    }

    @Override
    @DeleteMapping("/sil/{id}")
    public void deleteById(@PathVariable Long id) {
        ekipmanService.deleteById(id);
    }

    @Override
    @PutMapping("/guncelle/{id}")
    public GenericMessage update(@PathVariable Long id, @RequestBody EkipmanUpdateDTO dto) {
        dto.setId(id); // Path'den gelen id'yi DTO'ya set et
        ekipmanService.update(dto);
        return new GenericMessage("Ekipman başarıyla güncellendi");
    }

}