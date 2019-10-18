import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoadingService {
  public loading$: Subject<boolean>;

  constructor() {
    this.loading$ = new Subject<boolean>();
    this.loading$.next(false);
  }

  public startLoading = () => this.loading$.next(true);
  public stopLoading = () => this.loading$.next(false);
}
