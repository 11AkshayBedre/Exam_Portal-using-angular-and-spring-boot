package com.example.Backend.Controller;

import com.example.Backend.Dto.QuestionDto;
import com.example.Backend.Entity.Question;
import com.example.Backend.Entity.Quiz;
import com.example.Backend.Service.QuestionService;
import com.example.Backend.Service.QuizService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@RestController
public class QuestionController {
    @Autowired
    QuestionService questionService;
    @Autowired
    QuizService quizService;
    @PostMapping("/question")
    public Question addQuestion(@RequestBody @Valid QuestionDto questionDto){
        return questionService.addQuestion(questionDto);
    }

    @GetMapping("/question")
    public List<Question> getQuestions(){
        return questionService.getQuestion();
    }

    @GetMapping("/question/{id}")
    public Question getQuestion(@PathVariable long id){
        return questionService.getQuestionById(id);
    }

    @GetMapping("/questions/{quiz}")
    public List <Question> getQuestionQuiz(@PathVariable Quiz quiz){
        return questionService.getQuestionQuiz(quiz);
    }
    @GetMapping("/question/quiz/{qid}")
    public ResponseEntity<?> getQuestionOfQuiz(@PathVariable Long qid)
    {
        Quiz quiz= quizService.getQuizById(qid);
        List<Question> questions = questionService.getQuestionQuiz(quiz);
        List list=new ArrayList(questions);
        if(list.size()>Integer.parseInt(quiz.getNoOfQuestion()))
        {
            list=list.subList(0, Integer.parseInt(quiz.getNoOfQuestion()+1));
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }
    @DeleteMapping("/question/{quesId}")
    public void deleteQuestion(@PathVariable long quesId){
        questionService.deleteQuestion(quesId);
    }
}
