package com.isg.ws.olayRaporu.impl;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.i.ICalisanService;
import com.isg.ws.olayRaporu.OlayRaporu;
import com.isg.ws.olayRaporu.i.IOlayRaporuController;
import com.isg.ws.olayRaporu.i.IOlayRaporuService;
import com.isg.ws.shared.GenericMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/olay-raporu")
@RequiredArgsConstructor
public class OlayRaporuController implements IOlayRaporuController {

    private final IOlayRaporuService olayRaporuService;
    private final ICalisanService calisanService;

    @Override
    @PostMapping("/kaydet") // POST http://localhost:8080/api/v1/olay-raporu/kaydet
    public GenericMessage save(@RequestBody OlayRaporu olayRaporu) {
        olayRaporuService.save(olayRaporu);
        return new GenericMessage("Olay raporu başarıyla kaydedildi");
    }

    @Override
    @GetMapping("/listele") // GET http://localhost:8080/api/v1/olay-raporu/listele
    public List<OlayRaporu> findAll() {
        return olayRaporuService.findAll();
    }

    @Override
    @GetMapping("/{id}") // GET http://localhost:8080/api/v1/olay-raporu/1
    public OlayRaporu findById(@PathVariable Long id) {
        return olayRaporuService.findById(id);
    }

    @Override
    @DeleteMapping("/sil/{id}") // DELETE http://localhost:8080/api/v1/olay-raporu/sil/1
    public GenericMessage deleteById(@PathVariable Long id) {
        olayRaporuService.deleteById(id);
        return new GenericMessage("Olay raporu başarıyla silindi");
    }

    @Override
    @PutMapping("/guncelle/{id}") // PUT http://localhost:8080/api/v1/olay-raporu/duzenle/1
    public GenericMessage update(@PathVariable Long id, @RequestBody OlayRaporu olayRaporu) {
        olayRaporuService.update(id, olayRaporu);
        return new GenericMessage("Olay raporu başarıyla güncellendi");
    }

    @GetMapping("/calisanlar") // GET http://localhost:8080/api/v1/olay-raporu/calisanlar
    public List<Calisan> getAllCalisanlar() {
        return calisanService.findAll();
    }
}