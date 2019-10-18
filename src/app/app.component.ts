import { Component, OnInit } from '@angular/core';
import { GlobalLoadingService } from './shared/services/global-loading.service';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'showcase-pijamas';
  public loading: boolean;
  constructor(private globalLoadingService: GlobalLoadingService) {}
  ngOnInit(): void {
    this.globalLoadingService.loading$.subscribe((loading: boolean) => {
      this.loading = loading;
    });
  }
}
