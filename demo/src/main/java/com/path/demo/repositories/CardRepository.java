package com.path.demo.repositories;

import com.path.demo.models.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    public Card findByCard(String card);
    public List<Card> findAll();
    public Card getById(Long card_id);
}
