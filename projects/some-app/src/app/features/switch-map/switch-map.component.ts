import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval } from 'rxjs';
import { mergeMap, shareReplay, startWith, switchMap, take, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'sa-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  trigger: Observable<number>;
  users: Observable<any[]>;

  countTriggered: 0;
  countResponse: 0;
  settingsForm: FormGroup;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.settingsForm = this.formBuilder.group({
      requestCount: ['10'],
      requestDelay: ['0']
    });

    this.trigger = this.settingsForm.valueChanges.pipe(
      startWith(this.settingsForm.getRawValue()),
      tap(() => {
        this.countTriggered = 0;
        this.countResponse = 0;
      }),
      mergeMap(({ requestDelay, requestCount }) => interval(parseInt(requestDelay, 10)).pipe(take(requestCount)))
    );
    this.users = this.trigger.pipe(
      tap(() => this.countTriggered++),
      switchMap(() => this.httpClient.get<any[]>('/api/users')),
      tap(() => this.countResponse++),
      shareReplay(1)
    );
  }
}
