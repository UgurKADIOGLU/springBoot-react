package com.hoxify.ws.user;

import com.hoxify.ws.Shared.GenericMessage;
import com.hoxify.ws.error.ApiError;
import com.hoxify.ws.user.dto.UserCreate;
import com.hoxify.ws.user.exception.ActivationNotificationEx;
import com.hoxify.ws.user.exception.InvalidTokenException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class userController {
    @Autowired
    UserService userService;

    @Autowired
    MessageSource messageSource;

    @CrossOrigin
    @PostMapping("/api/v1/users")
    ResponseEntity<?> createUser(@Valid @RequestBody UserCreate user) {
        userService.save(user.toUser());
        String message = messageSource.getMessage("hoxify.create.user.success.messages", null, LocaleContextHolder.getLocale());
        return ResponseEntity.ok(new GenericMessage(message));
    }

    @PatchMapping("/api/v1/users/{token}/active")
    ResponseEntity<?> activateUser(@PathVariable String token) {
        userService.activateUser(token);
        String message = "Hesabınız aktiftlestirildi";
        return ResponseEntity.ok(new GenericMessage(message));

    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    ResponseEntity<ApiError> MethodArgNotValidEx(MethodArgumentNotValidException exception) {
        ApiError error = new ApiError();
        error.setPath("/api/v1/users");
        String message = messageSource.getMessage("hoxify.error.validation", null, LocaleContextHolder.getLocale());
        error.setMessage(message);
        error.setStatus(400);
        Map<String, String> validationError = new HashMap<>();

        for (var fieldError : exception.getBindingResult().getFieldErrors()) {
            validationError.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        error.setValidationError(validationError);
        return ResponseEntity.badRequest().body(error);
    }

    @ExceptionHandler(ActivationNotificationEx.class)
    ResponseEntity<ApiError> ActivationNotificationEx(ActivationNotificationEx exception) {
        ApiError error = new ApiError();
        error.setPath("/api/v1/users");

        error.setMessage("Mail gitmedi");
        error.setStatus(502);

        return ResponseEntity.status(502).body(error);
    }

    @ExceptionHandler(InvalidTokenException.class)
    ResponseEntity<ApiError> InvalidTokenException(InvalidTokenException exception) {
        ApiError error = new ApiError();
        error.setPath("/api/v1/users");

        error.setMessage("Hatali token");
        error.setStatus(400);

        return ResponseEntity.status(400).body(error);
    }

}
