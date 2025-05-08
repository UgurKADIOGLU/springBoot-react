package com.isg.ws.olayRaporu;

import com.isg.ws.olayRaporu.OlayRaporu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OlayRaporuRepository extends JpaRepository<OlayRaporu, Long> {
    // JpaRepository temel CRUD operasyonlarını sağladığı için
    // ek metot tanımlamasına gerek yok
}
