package com.example.Backend.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QuestionDto {
    private String content;
    private String question1;
    private String question2;
    private String question3;
    private String question4;
    private String answer;
    private long quizId;
}
