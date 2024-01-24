import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InformeDTO } from '../Dto/informe.dto';

@Injectable({
 providedIn: 'root'
})
export class InformeService {

 private baseUrl = 'http://localhost:8080/api';

 constructor(private http: HttpClient) { }

 createInforme(informe: InformeDTO): Observable<InformeDTO> {
    const formData = new FormData();
    formData.append('title', informe.title);
    formData.append('reportType', informe.reportType);
    formData.append('reportText', informe.reportText);
    formData.append('imageFile', informe.imageFile, informe.imageFile.name);

    return this.http.post<InformeDTO>(`${this.baseUrl}/subir-informe`, formData);
 }
}
