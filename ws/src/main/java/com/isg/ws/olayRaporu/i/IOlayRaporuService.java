package com.isg.ws.olayRaporu.i;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.olayRaporu.OlayRaporu;

import java.util.List;

public interface IOlayRaporuService {
    OlayRaporu save(OlayRaporu olayRaporu);
    List<OlayRaporu> findAll();
    OlayRaporu findById(Long id);
    void deleteById(Long id);
    OlayRaporu update(Long id, OlayRaporu olayRaporu);

}