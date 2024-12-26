package com.github.mahdim1000.backend.service;

import com.github.mahdim1000.backend.domain.Scanner;
import com.github.mahdim1000.backend.repository.ScannerRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;


@Service
public class ScannerService {
    private final ScannerRepository scannerRepository;

    public ScannerService(ScannerRepository scannerRepository) {
        this.scannerRepository = scannerRepository;
    }

    @Transactional
    public void create(Scanner scanner) {
        scannerRepository.save(scanner);
    }

    @Transactional
    public void delete(UUID scannerId) {
        scannerRepository.deleteById(scannerId);
    }

    @Transactional
    public List<Scanner> getAll() {
        var page = PageRequest.of(0, 1000, Sort.by(Sort.Direction.DESC, "createdAt"));
        return scannerRepository.findAll(page).getContent();
    }
}
