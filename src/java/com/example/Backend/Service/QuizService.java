package com.example.Backend.Service;

import com.example.Backend.Dto.QuizDto;
import com.example.Backend.Entity.Category;
import com.example.Backend.Entity.Quiz;
import com.example.Backend.Repository.CategoryRepository;
import com.example.Backend.Repository.Quizrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuizService {
    @Autowired
    Quizrepository quizrepository;
    @Autowired
    CategoryRepository categoryRepository;
    public Quiz addQuiz(QuizDto quizDto) {
        Quiz quiz = new Quiz();
        quiz.setQuizTitle(quizDto.getQuizTitle());
        quiz.setDescription(quizDto.getDescription());
        quiz.setMaxMarks(quizDto.getMaxMarks());
        quiz.setNoOfQuestion(quizDto.getNoOfQuestion());
        quiz.setIsActive(quizDto.getIsActive());
        quiz.setCategory(categoryRepository.getReferenceById(quizDto.getCategoryId()));
        return quizrepository.save(quiz);
    }

    public List<Quiz> getQuiz() {
        return quizrepository.findAll();
    }

    public void deleteQuiz(long id) {

        quizrepository.deleteById(id);
    }

    public Quiz getQuizById(long id) {

        return quizrepository.findById(id).get();
    }

    public Quiz updateQuiz(QuizDto quizDto, long id) {
        Quiz quiz = quizrepository.findById(id).get();
        quiz.setQuizTitle(quizDto.getQuizTitle());
        quiz.setDescription(quizDto.getDescription());
        quiz.setMaxMarks(quizDto.getMaxMarks());
        quiz.setNoOfQuestion(quizDto.getNoOfQuestion());
        quiz.setIsActive(quizDto.getIsActive());
        quiz.setCategory(categoryRepository.getReferenceById(quizDto.getCategoryId()));
        return quizrepository.save(quiz);
    }

    public List<Quiz> getActiveQuiz() {
        return quizrepository.findByIsActive("true");
    }

    public List<Quiz> getcategoryActiveQuiz(long cid) {
        Category category=categoryRepository.findById(cid).get();
        return quizrepository.findByCategoryAndIsActive(category,"true");
    }
}
