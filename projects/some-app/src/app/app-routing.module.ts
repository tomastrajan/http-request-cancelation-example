import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleRequestComponent } from './features/single-request/single-request.component';
import { ManyRequestsComponent } from './features/many-requests/many-requests.component';
import { SwitchMapComponent } from './features/switch-map/switch-map.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'single-request',
    pathMatch: 'full'
  },
  {
    path: 'single-request',
    component: SingleRequestComponent
  },
  {
    path: 'many-requests',
    component: ManyRequestsComponent
  },
  {
    path: 'switch-map',
    component: SwitchMapComponent
  },
  {
    path: '**',
    redirectTo: 'single-request'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
