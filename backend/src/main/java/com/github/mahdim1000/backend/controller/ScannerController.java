package com.github.mahdim1000.backend.controller;

import com.github.mahdim1000.backend.domain.Scanner;
import com.github.mahdim1000.backend.service.ScannerService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("/api/v1/scanner")
@RestController
public class ScannerController {
    private final ScannerService scannerService;

    public ScannerController(ScannerService scannerService) {
        this.scannerService = scannerService;
    }

    @PostMapping
    public ResponseEntity<Void> createScanner(@RequestBody Scanner scanner) {
        scannerService.create(scanner);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteScanner(@PathVariable UUID id) {
        scannerService.delete(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Scanner>> getAllScanners() {
        return ResponseEntity.ok(scannerService.getAll());

    }
}
