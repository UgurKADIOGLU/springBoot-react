package com.isg.ws.muayene.impl;

import com.isg.ws.muayene.Muayene;
import com.isg.ws.muayene.i.IMuayeneController;
import com.isg.ws.muayene.i.IMuayeneService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/muayene")
@RequiredArgsConstructor
public class MuayeneController implements IMuayeneController {

    private final IMuayeneService muayeneService;

    @Override
    @PostMapping("/kaydet")
    public ResponseEntity<Muayene> createMuayene(@RequestBody Muayene muayene) {
        return ResponseEntity.ok(muayeneService.save(muayene));
    }

    @Override
    @GetMapping("/listele")
    public ResponseEntity<List<Muayene>> getAllMuayene() {
        return ResponseEntity.ok(muayeneService.findAll());
    }

    @Override
    @GetMapping("/{id}")
    public ResponseEntity<Muayene> getMuayeneById(@PathVariable Long id) {
        return ResponseEntity.ok(muayeneService.findById(id));
    }

    @Override
    @PutMapping("/guncelle/{id}")
    public ResponseEntity<Muayene> updateMuayene(@PathVariable Long id, @RequestBody Muayene muayene) {
        return ResponseEntity.ok(muayeneService.update(id, muayene));
    }

    @Override
    @DeleteMapping("/sil/{id}")
    public ResponseEntity<Void> deleteMuayene(@PathVariable Long id) {
        muayeneService.deleteById(id);
        return ResponseEntity.ok().build();
    }
}