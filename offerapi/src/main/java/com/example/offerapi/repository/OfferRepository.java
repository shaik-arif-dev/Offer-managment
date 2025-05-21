package com.example.offerapi.repository;

import com.example.offerapi.model.Offer;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Repository
public class OfferRepository {
    
    // In-memory storage using ConcurrentHashMap for thread safety
    private final Map<Long, Offer> offerMap = new ConcurrentHashMap<>();
    
    // For auto-generating IDs
    private final AtomicLong idCounter = new AtomicLong(1);
    
    public List<Offer> findAll() {
        return new ArrayList<>(offerMap.values());
    }
    
    public Optional<Offer> findById(Long id) {
        return Optional.ofNullable(offerMap.get(id));
    }
    
    public Offer save(Offer offer) {
        if (offer.getId() == null) {
            // New offer, assign ID
            offer.setId(idCounter.getAndIncrement());
        }
        offerMap.put(offer.getId(), offer);
        return offer;
    }
    
    public void deleteById(Long id) {
        offerMap.remove(id);
    }
    
    public boolean existsById(Long id) {
        return offerMap.containsKey(id);
    }
}