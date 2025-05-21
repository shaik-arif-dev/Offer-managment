import { Component, OnInit } from '@angular/core';
import { Offer, OfferService } from '../../services/offer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class OfferManagementComponent implements OnInit {
  offers: Offer[] = [];
  newOffer: Offer = { title: '', discountType: 'FLAT', value: 0, minCartAmount: 0, description: '' };
  editId: number | null = null;

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.loadOffers();
  }

  loadOffers() {
    this.offerService.getOffers().subscribe(data => this.offers = data);
  }

  saveOffer() {
    if (this.editId) {
      this.offerService.updateOffer(this.editId, this.newOffer).subscribe(() => {
        this.resetForm();
        this.loadOffers();
      });
    } else {
      this.offerService.addOffer(this.newOffer).subscribe(() => {
        this.resetForm();
        this.loadOffers();
      });
    }
  }

  editOffer(offer: Offer) {
    this.editId = offer.id!;
    this.newOffer = { ...offer };
  }

  deleteOffer(id: number) {
    this.offerService.deleteOffer(id).subscribe(() => this.loadOffers());
  }

  resetForm() {
    this.editId = null;
    this.newOffer = { title: '', discountType: 'FLAT', value: 0, minCartAmount: 0, description: '' };
  }
}