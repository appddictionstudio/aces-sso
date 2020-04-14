package aces.af.mil.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.security.cert.X509Certificate;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/")
public class PortalController {
    // @GetMapping("/")
    public String home(HttpServletRequest request, HttpServletResponse response) {
        System.out.println("HttpServletRequest");
        System.out.println(request);
        X509Certificate[] certificates = (X509Certificate[]) request
                .getAttribute("javax.servlet.request.X509Certificate");
        // Certificate[] certs = (Certificate[])
        // request.getAttribute("javax.servlet.request.X509Certificate");
        System.out.println(certificates);
        return "forward:/index.html";
    }
}