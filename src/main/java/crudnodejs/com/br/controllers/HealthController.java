// src/main/java/crudnodejs.com.br.controllers/HealthController.java
package crudnodejs.com.br.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class HealthController {
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> getHealth() {
        return ResponseEntity.ok(
            Map.of(
                "status", "OK",
                "message", "Aplicação saudável!"
            )
        );
    }
}