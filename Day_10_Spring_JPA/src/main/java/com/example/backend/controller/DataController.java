package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.DataModel;
import com.example.backend.service.DataService;

@RestController
@RequestMapping("/data")
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping("/getall")
    public  List<DataModel> GetAllData() {
        return dataService.getData();
    }

    @GetMapping("/getbyid/{id}")
    public DataModel getById(@RequestParam int id) {
        return dataService.getDataById(id);
    }

    @PostMapping("/post")
    public DataModel postData(@RequestBody DataModel data) {
        return  dataService.postData(data);
    }

    @PostMapping("/postall")
    public List<DataModel> postById(@RequestBody List<DataModel> data) {
        return dataService.postAllData(data);
    }
}
