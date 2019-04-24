import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'sa-single-request',
  templateUrl: './single-request.component.html',
  styleUrls: ['./single-request.component.css']
})
export class SingleRequestComponent implements OnInit {
  users: Observable<any[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.users = this.httpClient.get<any[]>('/api/users');
  }
}
