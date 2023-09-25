import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ITransaction } from '../interfaces/i-transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = environment.baseURL + 'barang-in'; // Ganti dengan URL API sebenarnya jika digunakan

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': environment.token
  });

  constructor(private http: HttpClient) {}
  
  getTransaction(): Observable<ITransaction[]> {
    return this.http
      .get<any>(`${this.apiUrl}`, { headers: this.headers })
      .pipe(map((response) => response));
  }

  addTransaction(transaction: ITransaction): Observable<ITransaction> {
    return this.http.post<ITransaction>(`${this.apiUrl}`, transaction, {
      headers: this.headers,
    });
  }
  
}
