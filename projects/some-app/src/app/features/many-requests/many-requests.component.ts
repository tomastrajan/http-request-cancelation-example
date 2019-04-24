import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'sa-many-requests',
  templateUrl: './many-requests.component.html',
  styleUrls: ['./many-requests.component.css']
})
export class ManyRequestsComponent implements OnInit {
  users: Observable<any[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.users = this.httpClient.get<any[]>('/api/users');
    for (let i = 0; i < 12; i++) {
      this.httpClient.get<any[]>('/api/users').subscribe();
    }
  }
}
