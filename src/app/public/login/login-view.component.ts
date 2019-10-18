import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { GlobalLoadingService } from 'src/app/shared/services/global-loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sp-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  public loginForm: FormGroup;
  public formErrorHtml: string;

  private mockedLogginUserInfo = {
    user: 'admin',
    password: '123'
  };

  constructor(
    private authService: AuthService,
    private globalLoadingService: GlobalLoadingService,
    private router: Router
  ) {
    this.formErrorHtml =
      '(*)Los campos son <span class="warning">obligatorios</span>';
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      user: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public onSubmit() {
    this.login();
  }

  private login() {
    if (this.isValidLogginData(this.loginForm.value)) {
      this.globalLoadingService.startLoading();
      setTimeout(() => {
        this.globalLoadingService.stopLoading();
        this.authService.setUser({
          name: this.loginForm.value.user,
          logged: true
        });
        this.router.navigate(['/home']);
      }, 2500);
    } else {
      this.formErrorHtml =
        '(*)La contraseña que ha introducido es <span class="ko">incorrecta</span>';
    }
  }

  private isValidLogginData(logginData: {
    user: string;
    password: string;
  }): boolean {
    return this.mockedLogginUserInfo.password === logginData.password;
  }
}
