import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CreateAccountMutationService, LoginByEmailQueryService } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _router: Router,  private loginService:LoginByEmailQueryService,  private createAccout:CreateAccountMutationService) {}

  async login(email: string, password: string) {
    this.loginService.watch({ email: email, password }, { fetchPolicy: 'network-only' })
    .valueChanges.pipe(map(result => result.data.loginByEmail));
    this._router.navigate(['/home']);
  }

  async signUp(username: string, password: string) {
    this.createAccout.mutate({ email: username,password,username })
    this._router.navigate(['/auth']);
  }

  async logout() {
    this._router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return true;
  }
}
