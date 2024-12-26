package com.github.mahdim1000.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.io.PrintWriter;
import java.net.Socket;
import java.io.IOException;

@Component
public class TCPSocketManager {
    @Value("${tcp.server.host}")
    private String SERVER_HOST;
    @Value("${tcp.server.port}")
    private int SERVER_PORT;

    private Socket socket;
    private PrintWriter writer;
    private boolean isConnected = false;

    public TCPSocketManager() {
        System.out.println("trying to connect to server...");
        System.out.println("server host: " + SERVER_HOST);
        System.out.println("server port: " + SERVER_PORT);
        connect();
    }

    private void connect() {
        try {
            socket = new Socket(SERVER_HOST, SERVER_PORT);
            writer = new PrintWriter(socket.getOutputStream(), true);
            isConnected = true;
        } catch (IOException e) {
            handleReconnection();
        }
    }

    @Scheduled(fixedRate = 60000)
    private void monitorConnection() {
        handleReconnection();
    }

    private boolean isSocketConnected() {
        return socket != null && !socket.isClosed() && socket.isConnected();
    }

    private void handleReconnection() {
        System.out.println("Reconnecting to server...");
        try {
            if (socket != null) {
                socket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        connect();
    }

    public void sendMessage(String message) {
        if (isConnected && writer != null) {
            System.out.println("message sent: " + message);
            writer.println(message);
        }
    }
}
