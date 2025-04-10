package com.isg.ws.calisan.i;

import com.isg.ws.calisan.Calisan;
import com.isg.ws.calisan.dto.DtoCalisan;
import com.isg.ws.shared.GenericMessage;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface ICalisanController {
    public GenericMessage save(Calisan calisan);
    public List<Calisan> findAll();
    public void deleteById(Long id);
}
