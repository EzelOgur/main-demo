package com.msin;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Repo  extends MongoRepository<Model,String> {
}
