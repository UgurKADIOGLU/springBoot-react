package com.isg.ws.olayRaporu.impl;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.i.ICalisanService;
import com.isg.ws.olayRaporu.OlayRaporu;
import com.isg.ws.olayRaporu.OlayRaporuRepository;
import com.isg.ws.olayRaporu.i.IOlayRaporuService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OlayRaporuService implements IOlayRaporuService {

    private final OlayRaporuRepository olayRaporuRepository;
    private final ICalisanService calisanService;

    @Override
    public OlayRaporu save(OlayRaporu olayRaporu) {
        // Raporlayan çalışanı ID'ye göre bul
        Calisan raporlayan = calisanService.findById(olayRaporu.getRaporlayan().getId());

        // Yeni rapor nesnesini oluştur
        olayRaporu.setRaporlayan(raporlayan);


        return olayRaporuRepository.save(olayRaporu);
    }

    @Override
    public List<OlayRaporu> findAll() {
        return olayRaporuRepository.findAll();
    }

    @Override
    public OlayRaporu findById(Long id) {
        return olayRaporuRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Olay raporu bulunamadı: " + id));
    }

    @Override
    public void deleteById(Long id) {
        // Önce raporun var olduğunu kontrol et
        findById(id);
        olayRaporuRepository.deleteById(id);
    }

    @Override
    public OlayRaporu update(Long id, OlayRaporu olayRaporu) {
        // Mevcut raporu bul
        OlayRaporu mevcutRapor = findById(id);

        // Raporlayan çalışanı ID'ye göre bul
        Calisan raporlayan = calisanService.findById(olayRaporu.getRaporlayan().getId());

        // Alanları güncelle
        mevcutRapor.setAciklama(olayRaporu.getAciklama());
        mevcutRapor.setOlayTarihi(olayRaporu.getOlayTarihi());
        mevcutRapor.setRaporlayan(raporlayan);

        return olayRaporuRepository.save(mevcutRapor);
    }


}



