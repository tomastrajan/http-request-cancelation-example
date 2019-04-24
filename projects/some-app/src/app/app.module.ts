import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleRequestComponent } from './features/single-request/single-request.component';
import { ManyRequestsComponent } from './features/many-requests/many-requests.component';
import { SwitchMapComponent } from './features/switch-map/switch-map.component';

@NgModule({
  declarations: [AppComponent, SingleRequestComponent, ManyRequestsComponent, SwitchMapComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
