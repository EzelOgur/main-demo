package com.msin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/login")
public class Controller {

    @Autowired
    Repo repository;


    @GetMapping("/60197c9c2fa8e611b4c10fc7")
    public List<Model> getList(){
        return repository.findAll();
    }

    @PostMapping
    public Model login(@RequestBody Model model){
        return repository.save(model);
    }


}
