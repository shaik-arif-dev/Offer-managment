import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Offer {
  id?: number;
  title: string;
  discountType: 'FLAT' | 'PERCENTAGE';
  value: number;
  minCartAmount: number;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class OfferService {
  private apiUrl = 'http://localhost:8080/offers';

  constructor(private http: HttpClient) { }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl);
  }

  addOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.apiUrl, offer);
  }

  updateOffer(id: number, offer: Offer): Observable<Offer> {
    return this.http.put<Offer>(`${this.apiUrl}/${id}`, offer);
  }

  deleteOffer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}