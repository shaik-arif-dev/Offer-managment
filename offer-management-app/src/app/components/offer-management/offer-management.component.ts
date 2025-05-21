import { Component, OnInit } from '@angular/core';
import { Offer, OfferService } from '../../services/offer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { trigger, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-offer-management',
  templateUrl: './offer-management.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatTableModule, MatIconModule, MatCardModule, MatListModule],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class OfferManagementComponent implements OnInit {
  offers: Offer[] = [];
  newOffer: Offer = { title: '', discountType: 'FLAT', value: 0, minCartAmount: 0, description: '' };
  editId: number | null = null;
  validationErrors: string[] = [];

  constructor(private offerService: OfferService) {}

  validateOffer() {
    this.validationErrors = [];
    if (!this.newOffer.title) this.validationErrors.push('Title is required');
    if (!this.newOffer.discountType) this.validationErrors.push('Discount type is required');
    if (!this.newOffer.value) this.validationErrors.push('Value is required');
    if (!this.newOffer.minCartAmount) this.validationErrors.push('Minimum cart amount is required');
    if (!this.newOffer.description) this.validationErrors.push('Description is required');
    return this.validationErrors.length === 0;
  }

  ngOnInit() {
    this.loadOffers();
  }

  loadOffers() {
    this.offerService.getOffers().subscribe(data => this.offers = data);
  }

  saveOffer() {
    if (!this.validateOffer()) return;
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