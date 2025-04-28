package com.isg.ws.ekipman.i;

import com.isg.ws.ekipman.Ekipman;
import com.isg.ws.shared.GenericMessage;

import java.util.List;

public interface IEkipmanController {
    GenericMessage save(Ekipman ekipman);
    List<Ekipman> findAll();
    Ekipman findById(Long id);
    void deleteById(Long id);
}
