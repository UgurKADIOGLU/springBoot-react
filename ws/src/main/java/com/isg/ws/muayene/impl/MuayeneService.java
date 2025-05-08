package com.isg.ws.muayene.impl;

import com.isg.ws.ekipman.i.IEkipmanService;
import com.isg.ws.muayene.Muayene;
import com.isg.ws.muayene.i.IMuayeneRepository;
import com.isg.ws.muayene.i.IMuayeneService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MuayeneService implements IMuayeneService {

    private final IMuayeneRepository muayeneRepository;
    private final IEkipmanService ekipmanService;

    @Override
    public Muayene save(Muayene muayene) {
        muayene.setEkipman(ekipmanService.findById(muayene.getEkipman().getId()));
        return muayeneRepository.save(muayene);
    }

    @Override
    public List<Muayene> findAll() {
        return muayeneRepository.findAll();
    }

    @Override
    public Muayene findById(Long id) {
        return muayeneRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Muayene bulunamadı: " + id));
    }

    @Override
    public void deleteById(Long id) {
        findById(id);
        muayeneRepository.deleteById(id);
    }

    @Override
    public Muayene update(Long id, Muayene muayene) {
        Muayene mevcutMuayene = findById(id);
        mevcutMuayene.setMuayeneTarihi(muayene.getMuayeneTarihi());
        mevcutMuayene.setMuayeneEden(muayene.getMuayeneEden());
        mevcutMuayene.setNotlar(muayene.getNotlar());
        mevcutMuayene.setEkipman(ekipmanService.findById(muayene.getEkipman().getId()));
        return muayeneRepository.save(mevcutMuayene);
    }
}
