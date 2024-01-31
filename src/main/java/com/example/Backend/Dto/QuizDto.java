package com.example.Backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuizDto {
    private String quizTitle;

    private String description;
    private String maxMarks;
    private String noOfQuestion;
    private String isActive;
    private long categoryId;
}
