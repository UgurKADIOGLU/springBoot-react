package com.isg.ws.muayene.i;

import com.isg.ws.muayene.Muayene;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMuayeneRepository extends JpaRepository<Muayene, Long> {
}