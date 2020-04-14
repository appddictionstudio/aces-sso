package aces.af.mil.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@Controller
public class PortalController {
    @GetMapping(value="/getCert")
    @ResponseBody
    public String home(HttpServletRequest request, HttpServletResponse response) {
        response.addHeader("SSL_CERT", "Testing");
        return "Testing";
    }
}