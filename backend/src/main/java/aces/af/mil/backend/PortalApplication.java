package aces.af.mil.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

import aces.af.mil.controller.PortalController;

// Disable Login Page for SpringBoot Security
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })

// Get Controller
@ComponentScan(basePackageClasses = PortalController.class)
public class PortalApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(PortalApplication.class, args);
	}

	// Changes the context path to be the same as in production for local testing. 
	@Bean
	public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> webServerFactoryCustomizer() {
		return factory -> factory.setContextPath("/aces-portal");
	}

}
