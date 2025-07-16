package crudnodejs.com.br.routes;// HealthController.java

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<String> getHealth() {
        // Lógica de verificação de saúde (health check)
        return ResponseEntity.ok("OK");
    }
}