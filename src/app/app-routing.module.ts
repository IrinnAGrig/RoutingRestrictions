import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './login/loginGuard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    canActivateChild: [LoginGuard],
    children: [
      {
        path: 'home',
        data: {
          role: [false, true],
        },
        loadChildren: () =>
          import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'login',
        data: {
          role: [false],
        },
        loadChildren: () =>
          import('./login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'news',
        data: {
          role: [false, true],
        },
        loadChildren: () =>
          import('./news/news.module').then(
            m => m.NewsModule
          ),
      },
      {
        path: 'profile',
        data: {
          role: [true],
        },
        loadChildren: () =>
          import('./profile/profile.module').then(
            m => m.ProfileModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
