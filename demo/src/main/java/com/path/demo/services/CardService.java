package com.path.demo.services;

import com.path.demo.models.Card;
import com.path.demo.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardService {
    @Autowired
    private CardRepository cardRepository;

    public List<Card> getAllCard() {

        return cardRepository.findAll();
    }

    public Card findCardById(Long card_id) {

        return cardRepository.getById(card_id);
    }
}
