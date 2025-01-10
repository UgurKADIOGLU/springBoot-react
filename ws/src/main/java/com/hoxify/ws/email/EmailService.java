package com.hoxify.ws.email;

import com.hoxify.ws.config.HoaxifyProperties;
import com.hoxify.ws.user.User;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import java.util.Properties;

@Service
public class EmailService {

    JavaMailSenderImpl mailSender;

    @Autowired
    HoaxifyProperties hoaxifyProperties;

    @PostConstruct
    public void initialize() {
        this.mailSender = new JavaMailSenderImpl();
        mailSender.setHost(hoaxifyProperties.getEmail().host());
        mailSender.setPort(hoaxifyProperties.getEmail().port());
        mailSender.setUsername(hoaxifyProperties.getEmail().username());
        mailSender.setPassword(hoaxifyProperties.getEmail().password());
        Properties properties = mailSender.getJavaMailProperties();
        properties.put("mail.smtp.starttls.enable", "true");

    }

    public void sendActivaitonEmail(String email, String activationToken) {
        var activationUrl = hoaxifyProperties.getClient().host() + "/activation/" + activationToken;
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("ugur@isgzone.com");
        message.setTo(email);
        message.setSubject("Account Activation");
        message.setText(activationUrl);
        this.mailSender.send(message);
    }
}
