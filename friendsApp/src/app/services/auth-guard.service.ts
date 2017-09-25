import 'rxjs/add/operator/switchMap';
import { Injectable }  from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ParamMap, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from './login.service';
import {User} from '../model/user.model';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService,  
    private route: ActivatedRoute,
    private router: Router) { }
    user: User;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;
    let urlArray: string[] = url.split("/");
    if(urlArray[2]) {
      this.loginService.getUser(+urlArray[2]) .subscribe(user => {
        this.user = user;
        if (!user.logged) {
         this.router.navigate(["/login"]);
        }
      });
    } 

    return true;
  }
}
