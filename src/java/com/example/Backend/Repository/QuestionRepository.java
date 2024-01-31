package com.example.Backend.Repository;

import com.example.Backend.Entity.Question;
import com.example.Backend.Entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question,Long> {
    public List<Question> findByQuiz(Quiz quiz);
}
