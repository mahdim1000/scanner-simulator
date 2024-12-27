package com.github.mahdim1000.backend.service;

import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import java.io.PrintWriter;
import java.net.Socket;
import java.io.IOException;

@Component
public class TCPSocketManager {
    private final String serverHost;
    private final Integer serverPort;

    private Socket socket;
    private PrintWriter writer;
    private boolean isConnected = false;

    public TCPSocketManager(ApplicationContext context) {
        serverHost = context.getEnvironment().getProperty("tcp.server.host");
        serverPort = Integer.parseInt(context.getEnvironment().getProperty("tcp.server.port"));
        System.out.println("trying to connect to server...");
        System.out.println("server host: " + serverHost);
        System.out.println("server port: " + serverPort);
        connect();
    }

    private void connect() {
        try {
            socket = new Socket(serverHost, serverPort);
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
        System.out.println("message sent: " + message);
        if (isConnected && writer != null) {
            handleReconnection();
        }
        try {
            writer.println(message);
        } catch (Exception e) {
            System.out.println("exception occurred while sending message: " + e.getMessage());
            handleReconnection();
        }
    }
}
