import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http : HttpClient) { }

  sendMessage(body)
  {
    return this.http.post('http://localhost:3000/sendmail',body);
  }
  sendMessage1(files)
  {
    return this.http.post('http://localhost:3000/multipleFiles',files);
  }
}
