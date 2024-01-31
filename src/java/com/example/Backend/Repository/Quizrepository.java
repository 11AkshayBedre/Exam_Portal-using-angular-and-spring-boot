package com.example.Backend.Repository;

import com.example.Backend.Entity.Category;
import com.example.Backend.Entity.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Quizrepository extends JpaRepository<Quiz,Long> {
    List<Quiz> findByCategory(Category category);
    public List<Quiz> findByIsActive(String b);
    List<Quiz> findByCategoryAndIsActive(Category category,String b);
}
