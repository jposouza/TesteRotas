import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class AcessoLogadoGuard implements CanActivate, CanActivateChild {

   constructor(
      private router: Router
   ) { }

   canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (sessionStorage['token'] != null) {
         return true;
      } else {
         this.router.navigate(['/login']);
      }

   }

   canActivateChild(
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (sessionStorage['token'] != null) {
         return true;
      } else {
         this.router.navigate(['/login']);
      }
   }

}
