import { AcessoLogadoGuard } from './../guards/acesso-logado.guard';
import { OverviewComponent } from './product-details/overview/overview.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   {
      path: '',
      component: ProductListComponent,
      canActivate: [AcessoLogadoGuard]
   },
   {
      path: 'product-details/:id',
      canActivateChild: [AcessoLogadoGuard],
      children: [
         {
            path: '',
            component: ProductDetailsComponent
         },
         {
            path: 'overview',
            component: OverviewComponent
         }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class ProductsRoutingModule { }
