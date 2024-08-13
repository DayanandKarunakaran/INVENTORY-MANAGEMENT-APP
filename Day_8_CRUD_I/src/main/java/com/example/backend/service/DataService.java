package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.DataModel;
import com.example.backend.repository.DataRepo;

@Service
public class DataService {

    @Autowired
    private DataRepo dataRepo;

    public List<DataModel> getData(){
        return dataRepo.findAll();
    }
    public DataModel getDataById(int id){
        return dataRepo.findById(id).orElseThrow(()->new Error("Not Found"));
    }
    public List<DataModel> postAllData(List<DataModel> data){
        return dataRepo.saveAll(data);
    }
    public DataModel postData(DataModel data){
        return dataRepo.save(data);
    }
}
