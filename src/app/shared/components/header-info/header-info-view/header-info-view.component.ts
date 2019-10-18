import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ImageSafe, TYPE_IMG } from '../../img-safe/img-safe';
import { HEADER_BTN_IDS } from '../header-button-group/header-button-group.service';

@Component({
  selector: 'sp-header-info-view',
  templateUrl: './header-info-view.component.html',
  styleUrls: ['./header-info-view.component.scss']
})
export class HeaderInfoViewComponent implements OnInit, OnDestroy {
  public headerImage: ImageSafe;
  public userLogged: string;

  constructor(private authService: AuthService, private router: Router) {
    this.headerImage = {
      name: 'logo',
      type: TYPE_IMG.PNG,
      alt: 'Logo'
    };
  }

  ngOnInit(): void {
    this.authService.user$.subscribe(val => {
      this.userLogged = val.name;
    });
  }

  ngOnDestroy(): void {
    this.authService.user$.unsubscribe();
  }

  public clickedHeaderBtn($event: ImageSafe) {
    this.triggerHeaderActions($event.id as HEADER_BTN_IDS);
  }

  private triggerHeaderActions(action: HEADER_BTN_IDS) {
    switch (action) {
      case HEADER_BTN_IDS.BTNHOME:
        this.router.navigateByUrl('/home');
        break;
      case HEADER_BTN_IDS.BTNLOGOUT:
        this.logOut();
        break;
      default:
        this.router.navigateByUrl('/random');
        break;
    }
  }

  private logOut() {
    this.authService.setUser({ name: '', logged: false });
    this.router.navigateByUrl('/login');
  }
}
