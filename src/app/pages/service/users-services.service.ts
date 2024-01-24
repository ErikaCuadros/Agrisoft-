
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = 'http://localhost:3000/agrisoft/chatgpt/sendMessage';
  sendMessage(userMessage: string): Observable<string> {
    return this.httpClient.post<{ response: string }>(this.apiUrl, { message: userMessage }).pipe(
      map(response => response.response || 'No response')
    );
  }

}

