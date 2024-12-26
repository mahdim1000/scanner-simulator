package com.github.mahdim1000.backend.repository;

import com.github.mahdim1000.backend.domain.Scanner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;


public interface ScannerRepository extends JpaRepository<Scanner, UUID> {
}
