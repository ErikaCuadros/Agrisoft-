import { Injectable } from '@angular/core';
import { ReportPlagaDto } from '../Dto/reportePlaga.dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportPlagaService {
  private apiUrl = 'https://example.com/api/report-plaga';

  constructor(private http: HttpClient) { }

  submitReport(report: ReportPlagaDto) {
    return this.http.post<ReportPlagaDto>(this.apiUrl, report);
  }
}
