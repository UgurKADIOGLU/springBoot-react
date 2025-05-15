package com.isg.ws.calisan.repository;

import com.isg.ws.calisan.entity.Calisan;
import org.springframework.data.jpa.repository.JpaRepository;



public interface CalisanRepository extends JpaRepository<Calisan, Long> {
    // JpaRepository provides CRUD operations and more
    // You can add custom query methods here if needed
}
