package com.isg.ws.ekipman.impl;

import com.isg.ws.ekipman.Ekipman;
import com.isg.ws.ekipman.EkipmanRepository;
import com.isg.ws.ekipman.dto.EkipmanUpdateDTO;
import com.isg.ws.ekipman.i.IEkipmanService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EkipmanService implements IEkipmanService {

    private final EkipmanRepository ekipmanRepository;

    @Override
    public Ekipman save(Ekipman ekipman) {
        return ekipmanRepository.save(ekipman);
    }

    @Override
    public List<Ekipman> findAll() {
        return ekipmanRepository.findAll();
    }

    @Override
    public Ekipman findById(Long id) {
        return ekipmanRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ekipman bulunamadı: " + id));
    }

    @Override
    public void deleteById(Long id) {
        ekipmanRepository.deleteById(id);
    }

    @Override
    public Ekipman update(EkipmanUpdateDTO dto) {
        Ekipman mevcut = findById(dto.getId());

        mevcut.setEkipmanAdi(dto.getEkipmanAdi());
        mevcut.setSeriNumarasi(dto.getSeriNumarasi());
        mevcut.setSonMuayeneTarihi(dto.getSonMuayeneTarihi());

        return ekipmanRepository.save(mevcut);
    }
}