package com.example.Backend.Service;

import com.example.Backend.Dto.QuestionDto;
import com.example.Backend.Entity.Question;
import com.example.Backend.Entity.Quiz;
import com.example.Backend.Repository.QuestionRepository;
import com.example.Backend.Repository.Quizrepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    Quizrepository quizrepository;
    public Question addQuestion(QuestionDto questionDto) {
        Question question = new Question();
        question.setContent(questionDto.getContent());
        question.setQuestion1(questionDto.getQuestion1());
        question.setQuestion2(questionDto.getQuestion2());
        question.setQuestion3(questionDto.getQuestion3());
        question.setQuestion4(questionDto.getQuestion4());
        question.setAnswer(questionDto.getAnswer());
        question.setQuiz(quizrepository.getReferenceById(questionDto.getQuizId()));
        return questionRepository.save(question);
    }

    public List<Question> getQuestion() {
        return questionRepository.findAll();
    }

    public Question getQuestionById(long id) {
        return questionRepository.findById(id).get();
    }

    public List<Question> getQuestionQuiz(Quiz quiz) {
        return questionRepository.findByQuiz(quiz);
    }

    public void deleteQuestion(long quesId) {
        Question question=new Question();
        question.setQuestionId(quesId);
        questionRepository.delete(question);
    }
}
