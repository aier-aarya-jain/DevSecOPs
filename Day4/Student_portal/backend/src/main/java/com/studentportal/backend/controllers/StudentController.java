package com.studentportal.backend.controllers;

import com.studentportal.backend.models.Student;
import com.studentportal.backend.payload.response.MessageResponse;
import com.studentportal.backend.repository.StudentRepository;
import com.studentportal.backend.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    StudentRepository studentRepository;

    @GetMapping("/profile")
    @PreAuthorize("hasRole('STUDENT') or hasRole('ADMIN')")
    public ResponseEntity<?> getProfile() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Student> student = studentRepository.findByUserId(userDetails.getId());
        
        if (student.isPresent()) {
            return ResponseEntity.ok(student.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/profile")
    @PreAuthorize("hasRole('STUDENT')")
    public ResponseEntity<?> updateProfile(@RequestBody Student studentUpdates) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<Student> studentOpt = studentRepository.findByUserId(userDetails.getId());
        
        if (studentOpt.isPresent()) {
            Student existingStudent = studentOpt.get();
            // Update allowed fields
            existingStudent.setFirstName(studentUpdates.getFirstName());
            existingStudent.setLastName(studentUpdates.getLastName());
            existingStudent.setPhone(studentUpdates.getPhone());
            existingStudent.setAddress(studentUpdates.getAddress());
            // other fields like CGPA and department should ideally be updated by ADMIN/FACULTY only
            
            studentRepository.save(existingStudent);
            return ResponseEntity.ok(new MessageResponse("Profile updated successfully!"));
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/search")
    @PreAuthorize("hasRole('FACULTY') or hasRole('ADMIN')")
    public ResponseEntity<List<Student>> searchStudents(@RequestParam(required = false) String name) {
        if (name != null && !name.trim().isEmpty()) {
            return ResponseEntity.ok(studentRepository.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(name, name));
        }
        return ResponseEntity.ok(studentRepository.findAll());
    }
}
