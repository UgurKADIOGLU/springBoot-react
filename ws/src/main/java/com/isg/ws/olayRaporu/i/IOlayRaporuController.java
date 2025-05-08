package com.isg.ws.olayRaporu.i;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.olayRaporu.OlayRaporu;
import com.isg.ws.shared.GenericMessage;

import java.util.List;

public interface IOlayRaporuController {
    GenericMessage save(OlayRaporu olayRaporu);
    List<OlayRaporu> findAll();
    OlayRaporu findById(Long id);
    GenericMessage deleteById(Long id);
    GenericMessage update(Long id, OlayRaporu olayRaporu);
    List<Calisan> getAllCalisanlar();
}
