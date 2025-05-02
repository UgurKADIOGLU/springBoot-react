package com.isg.ws.ekipman.i;

import com.isg.ws.ekipman.Ekipman;
import com.isg.ws.ekipman.dto.EkipmanUpdateDTO;
import com.isg.ws.shared.GenericMessage;

import java.util.List;

public interface IEkipmanService {
    Ekipman save(Ekipman ekipman);
    List<Ekipman> findAll();
    Ekipman findById(Long id);
    void deleteById(Long id);
    Ekipman update(EkipmanUpdateDTO dto);
}
