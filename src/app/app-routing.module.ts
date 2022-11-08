import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './core/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
        data: { core: { title: 'Login' } }
      },
      {
        path: 'record',
        loadChildren: () => import('./modules/time-tracker/time-tracker.module').then(m => m.TimeTrackerModule),
        data: { core: { title: 'Time Tracker' } }
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
