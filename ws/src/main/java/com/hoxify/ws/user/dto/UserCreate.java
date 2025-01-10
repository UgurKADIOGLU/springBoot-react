package com.hoxify.ws.user.dto;

import com.hoxify.ws.user.User;
import com.hoxify.ws.validation.UniqueEmail;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record UserCreate(
        @NotBlank(message = "{hoxify.constrait.username.notblank}")
        //@Size(min = 4, max = 255)
        String username,

        @NotBlank
        @Email
        @UniqueEmail
        String email,

        @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{hoxify.constrait.password.patern}")
        @Size(min = 8, max = 255)
        String password
        ) {
    public User toUser() {
        User user=new User();
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(password);
        return  user;
    }
}
