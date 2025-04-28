package com.isg.ws.ekipman;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EkipmanRepository extends JpaRepository<Ekipman, Long> {
    // JpaRepository temel CRUD işlemlerini sağlar
}