import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: BehaviorSubject<User>;

  constructor() {
    this.user$ = new BehaviorSubject<User>({ name: '', logged: false });
  }

  public setUser(user: User): void {
    this.user$.next(user);
  }
}
