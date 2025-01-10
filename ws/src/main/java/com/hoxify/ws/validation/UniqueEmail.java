package com.hoxify.ws.validation;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import jakarta.validation.constraints.NotBlank;

import java.lang.annotation.Repeatable;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.ElementType.*;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

@Constraint(validatedBy = {UniqueEmailValidator.class })
@Target({ FIELD })
@Retention(RUNTIME)
public @interface UniqueEmail {
    String message() default "{hoxify.constrait.email.notunique}";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };
}
