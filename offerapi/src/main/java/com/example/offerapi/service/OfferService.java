package com.example.offerapi.service;

import com.example.offerapi.model.Offer;
import com.example.offerapi.repository.OfferRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OfferService {
    
    private final OfferRepository offerRepository;
    
    @Autowired
    public OfferService(OfferRepository offerRepository) {
        this.offerRepository = offerRepository;
    }
    
    public List<Offer> getAllOffers() {
        return offerRepository.findAll();
    }
    
    public Optional<Offer> getOfferById(Long id) {
        return offerRepository.findById(id);
    }
    
    public Offer createOffer(Offer offer) {
        return offerRepository.save(offer);
    }
    
    public Optional<Offer> updateOffer(Long id, Offer offerDetails) {
        return offerRepository.findById(id)
                .map(existingOffer -> {
                    // Keep the existing ID
                    offerDetails.setId(id);
                    return offerRepository.save(offerDetails);
                });
    }
    
    public boolean deleteOffer(Long id) {
        if (offerRepository.existsById(id)) {
            offerRepository.deleteById(id);
            return true;
        }
        return false;
    }
}