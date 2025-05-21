import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartApplyOfferComponent } from './cart-apply-offer.component';

describe('CartApplyOfferComponent', () => {
  let component: CartApplyOfferComponent;
  let fixture: ComponentFixture<CartApplyOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartApplyOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartApplyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
