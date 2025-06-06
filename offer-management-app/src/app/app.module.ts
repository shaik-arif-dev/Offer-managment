import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OfferManagementComponent } from './components/offer-management/offer-management.component';
import { CartApplyOfferComponent } from './components/cart-apply-offer/cart-apply-offer.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent,
    OfferManagementComponent,
    CartApplyOfferComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }