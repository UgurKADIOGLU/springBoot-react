package com.isg.ws.muayene.i;

import com.isg.ws.muayene.Muayene;

import java.util.List;

public interface IMuayeneService {
    Muayene save(Muayene muayene);
    List<Muayene> findAll();
    Muayene findById(Long id);
    void deleteById(Long id);
    Muayene update(Long id, Muayene muayene);
}
