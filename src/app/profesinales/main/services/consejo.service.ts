import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsejoDTO } from '../Dto/consejo.dto';

@Injectable({
  providedIn: 'root'
})
export class ConsejoService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  createConsejo(consejo: ConsejoDTO): Observable<ConsejoDTO> {
    return this.http.post<ConsejoDTO>(`${this.baseUrl}/subir-consejo`, consejo);
  }
}
