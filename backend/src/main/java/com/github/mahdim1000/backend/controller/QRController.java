package com.github.mahdim1000.backend.controller;

import com.github.mahdim1000.backend.service.TCPSocketManager;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/qr")
@RestController
public class QRController {

    private final TCPSocketManager socketManager;

    public QRController(TCPSocketManager socketManager) {
        this.socketManager = socketManager;
    }

    @PostMapping
    public ResponseEntity<Void> sendQRCode(@RequestParam String macAddress,
                                           @RequestParam String qrCode) {
        String message = macAddress + "#" + qrCode;
        socketManager.sendMessage(message);
        return ResponseEntity.ok().build();
    }
}
