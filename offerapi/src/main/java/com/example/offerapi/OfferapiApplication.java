package com.example.offerapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class OfferapiApplication {

    public static void main(String[] args) {
        SpringApplication.run(OfferapiApplication.class, args);
    }
}