package com.example.Backend.Controller;

import com.example.Backend.Dto.QuizDto;
import com.example.Backend.Entity.Quiz;
import com.example.Backend.Service.QuizService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuizController {
    @Autowired
    QuizService quizService;

    @PostMapping("/quiz")
    public Quiz addQuiz(@RequestBody @Valid QuizDto quizDto){
        return quizService.addQuiz(quizDto);
    }

    @GetMapping("/quiz")
    public List<Quiz> getQuizes(){
        return quizService.getQuiz();
    }

    @GetMapping("/quiz/{id}")
    public Quiz getQuiz(@PathVariable long id){
        return quizService.getQuizById(id);
    }
    @DeleteMapping("/quiz/{id}")
    public void deleteQuiz(@PathVariable long id){
        quizService.deleteQuiz(id);
    }

    @PutMapping("/quiz/{id}")
    public Quiz updateQuiz(@RequestBody QuizDto quizDto,@PathVariable long id){
        return quizService.updateQuiz(quizDto,id);
    }

    @GetMapping("/quiz/active")
    public List<Quiz> getActiveQuiz(){
        return quizService.getActiveQuiz();
    }

    @GetMapping("/quiz/category/active/{cid}")
    public List<Quiz> getActiveQuiz(@PathVariable long cid){
        return quizService.getcategoryActiveQuiz(cid);
    }
}
