import { Component, OnInit } from '@angular/core';
import { Offer, OfferService } from '../../services/offer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-apply-offer',
  templateUrl: './cart-apply-offer.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CartApplyOfferComponent implements OnInit {
  cart = [
    { name: 'Burger', qty: 2, price: 150 },
    { name: 'Fries', qty: 1, price: 80 }
  ];
  offers: Offer[] = [];
  selectedOfferId: number | null = null;
  message = '';

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.offerService.getOffers().subscribe(data => this.offers = data);
  }

  get subtotal() {
    return this.cart.reduce((sum, item) => sum + item.qty * item.price, 0);
  }

  get selectedOffer(): Offer | undefined {
    return this.offers.find(o => o.id === this.selectedOfferId);
  }

  get discount(): number {
    if (!this.selectedOffer) return 0;
    if (this.subtotal < this.selectedOffer.minCartAmount) {
      this.message = 'Offer not applicable: minimum cart amount not met.';
      return 0;
    }
    this.message = '';
    if (this.selectedOffer.discountType === 'FLAT') return this.selectedOffer.value;
    if (this.selectedOffer.discountType === 'PERCENTAGE') return this.subtotal * (this.selectedOffer.value / 100);
    return 0;
  }

  get total() {
    return this.subtotal - this.discount;
  }
}
