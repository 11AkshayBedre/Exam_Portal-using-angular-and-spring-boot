package com.example.Backend.Controller;

import com.example.Backend.Dto.CategoryDto;
import com.example.Backend.Entity.Category;
import com.example.Backend.Service.CategoryService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {
    @Autowired
    CategoryService categoryService;
    @PostMapping("/category")
    public Category addCategory(@RequestBody @Valid CategoryDto categoryDto){
        return categoryService.addCategory(categoryDto);
    }

    @GetMapping("/category")
    public List<Category> getCategorys(){
        return categoryService.getCategory();
    }

    @GetMapping("/category/{id}")
    public Category getCategory(@PathVariable long id){
        return categoryService.getCategoryById(id);
    }
}
