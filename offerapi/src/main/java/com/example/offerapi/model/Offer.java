package com.example.offerapi.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

public class Offer {
    
    private Long id;
    
    @NotBlank(message = "Title is required")
    private String title;
    
    @NotBlank(message = "Description is required")
    private String description;
    
    @NotNull(message = "Discount type is required")
    private DiscountType discountType;
    
    @NotNull(message = "Value is required")
    @Positive(message = "Value must be positive")
    private Double value;
    
    private Double minCartAmount;
    
    public enum DiscountType {
        FLAT,
        PERCENTAGE
    }
    
    // Constructors
    public Offer() {
    }
    
    public Offer(String title, String description, DiscountType discountType, Double value, Double minCartAmount) {
        this.title = title;
        this.description = description;
        this.discountType = discountType;
        this.value = value;
        this.minCartAmount = minCartAmount;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public DiscountType getDiscountType() {
        return discountType;
    }
    
    public void setDiscountType(DiscountType discountType) {
        this.discountType = discountType;
    }
    
    public Double getValue() {
        return value;
    }
    
    public void setValue(Double value) {
        this.value = value;
    }
    
    public Double getMinCartAmount() {
        return minCartAmount;
    }
    
    public void setMinCartAmount(Double minCartAmount) {
        this.minCartAmount = minCartAmount;
    }
}