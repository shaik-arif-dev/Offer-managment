import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferManagementComponent } from './components/offer-management/offer-management.component';
import { CartApplyOfferComponent } from './components/cart-apply-offer/cart-apply-offer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OfferManagementComponent, CartApplyOfferComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeTab: 'offer' | 'cart' = 'offer';
}
