package com.isg.ws.ekipman.i;

import com.isg.ws.ekipman.Ekipman;

import java.util.List;

public interface IEkipmanService {
    Ekipman save(Ekipman ekipman);
    List<Ekipman> findAll();
    Ekipman findById(Long id);
    void deleteById(Long id);
}
