package com.studentportal.backend.payload.request;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SignupRequest {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    private String role;
    
    @NotBlank
    private String firstName;
    
    @NotBlank
    private String lastName;
}
