package com.github.mahdim1000.backend.repository;

import com.github.mahdim1000.backend.domain.Server;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ServerRepository extends JpaRepository<Server, UUID> {
}
