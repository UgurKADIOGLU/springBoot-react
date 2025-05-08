package com.isg.ws.muayene.i;

import com.isg.ws.muayene.Muayene;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface IMuayeneController {

    @PostMapping
    ResponseEntity<Muayene> createMuayene(@RequestBody Muayene muayene);

    @GetMapping
    ResponseEntity<List<Muayene>> getAllMuayene();

    @GetMapping("/{id}")
    ResponseEntity<Muayene> getMuayeneById(@PathVariable Long id);

    @PutMapping("/{id}")
    ResponseEntity<Muayene> updateMuayene(@PathVariable Long id, @RequestBody Muayene muayene);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteMuayene(@PathVariable Long id);
}
