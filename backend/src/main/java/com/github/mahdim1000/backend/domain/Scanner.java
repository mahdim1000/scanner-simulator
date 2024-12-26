package com.github.mahdim1000.backend.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.UuidGenerator;

import java.time.Instant;
import java.util.UUID;

@Table
@Entity
public class Scanner {

    @UuidGenerator
    @Id
    private UUID id;
    @Column(unique = true)
    private String name;
    @Column(unique = true)
    private String macAddress;
    private Instant createdAt;

    public Scanner() {
        this.createdAt = Instant.now();
    }

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }


    public String getMacAddress() {
        return macAddress;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

}
