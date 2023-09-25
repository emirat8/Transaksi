import { Injectable } from '@angular/core';
import { ISupplier } from '../interfaces/i-supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiUrl = environment.baseURL + 'suppliers'; // Ganti dengan URL API sebenarnya jika digunakan

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': environment.token
  });

  constructor(private http: HttpClient) {}

  getSuppliers(): Observable<ISupplier[]> {
    return this.http
      .get<any>(`${this.apiUrl}`, { headers: this.headers })
      .pipe(map((response) => response));
  }

  // Fungsi untuk menambah supplier baru
  addSupplier(supplier: ISupplier): Observable<ISupplier> {
    return this.http.post<ISupplier>(`${this.apiUrl}/v1/sv`, supplier, {
      headers: this.headers,
    });
  }

  // Fungsi untuk mengambil detail supplier berdasarkan ID
  getSupplierById(id: number): Observable<ISupplier> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ISupplier>(url);
  }

  // Fungsi untuk mengupdate supplier
  updateSupplier(supplier: ISupplier): Observable<ISupplier> {
    const url = `${this.apiUrl}/v1/upd/${supplier._id}`;
    return this.http.put<ISupplier>(url, supplier);
  }

  // Fungsi untuk menghapus supplier berdasarkan ID
  deleteSupplier(id: number): Observable<void> {
    const url = `${this.apiUrl}/v1/del/${id}`;
    return this.http.delete<void>(url, {
      headers: this.headers,
    });
  }
}
