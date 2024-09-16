package com.path.demo.controllers;

import com.path.demo.models.Card;
import com.path.demo.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/v1/cards")

public class CardController {
    @Autowired
    private CardService cardService;

    @GetMapping("/")
    public ResponseEntity<List<Card>> getAllCards() {

        return ResponseEntity.ok(cardService.getAllCard());
    }
}
