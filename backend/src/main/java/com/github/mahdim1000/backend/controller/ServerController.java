package com.github.mahdim1000.backend.controller;

import com.github.mahdim1000.backend.domain.Server;
import com.github.mahdim1000.backend.repository.ServerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/server")
@RestController
public class ServerController {
    private final ServerRepository serverRepository;

    public ServerController(ServerRepository serverRepository) {
        this.serverRepository = serverRepository;
    }

    @PostMapping
    public ResponseEntity<Void> setServer(@RequestBody Server server) {
        var servers = serverRepository.findAll();
        if (servers.isEmpty()) {
            serverRepository.save(server);
        } else {
            var existingServer = servers.get(0);
            existingServer.setHost(server.getHost());
            existingServer.setPort(server.getPort());
            serverRepository.save(existingServer);
        }

        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<Server> getServer() {
        var servers = serverRepository.findAll();
        if (servers.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(serverRepository.findAll().get(0));
    }
}
