import { Erro404Component } from './erro404/erro404.component';
import { AcessoLogadoGuard } from './guards/acesso-logado.guard';
import { ProtegidoComponent } from './protegido/protegido.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ProductsModule } from './products/products.module';

const routes: Routes = [
   {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
   },
   {
      path: 'home',
      component: HomeComponent
   },
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'protegido',
      component: ProtegidoComponent,
      canActivate: [AcessoLogadoGuard]
   },
   {
      path: 'products',
      loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
   },
   {
      path: '**',
      component: Erro404Component
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
