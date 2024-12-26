package com.github.mahdim1000.backend.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfiguration {

    @Value("${openapi.server.urls}")
    private List<String> serverUrls;

    @Bean
    public OpenAPI openAPI() {
        List<Server> servers = serverUrls.stream().map(url -> new Server().url(url)).toList();
        return new OpenAPI()
                .servers(servers);
    }


}
