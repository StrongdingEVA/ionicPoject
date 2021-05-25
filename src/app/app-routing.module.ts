import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { PostComponent } from '../components/post/post.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {
    path: 'app-root',
    component: AppComponent
  },
  {
    path: 'app-home',
    component: HomeComponent
  },
  {
    path: 'app-post',
    component: PostComponent,
    // data: { animation: 'test' }
  },
  {
    path: 'app-login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
