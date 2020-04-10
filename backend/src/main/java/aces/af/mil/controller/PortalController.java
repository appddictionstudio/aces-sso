package aces.af.mil.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/aces-portal/home")

public class PortalController {
    @GetMapping
    public String home() {
        return "forward:/index.html";
    }

}