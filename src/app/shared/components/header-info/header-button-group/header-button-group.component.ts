import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageSafe } from '../../img-safe/img-safe';
import { HeaderButtonGroupService } from './header-button-group.service';

@Component({
  selector: 'sp-header-button-group',
  templateUrl: './header-button-group.component.html',
  styleUrls: ['./header-button-group.component.scss'],
  providers: [HeaderButtonGroupService]
})
export class HeaderButtonGroupComponent implements OnInit {
  @Output() clickedHeaderBtn = new EventEmitter<ImageSafe>();

  public headerImgSafeBtns: ImageSafe[];

  constructor(private headerButtonGroupService: HeaderButtonGroupService) {}

  ngOnInit() {
    this.headerImgSafeBtns = this.initHeaderButtonGroup();
  }

  public onHeaderElmClick($element) {
    this.clickedHeaderBtn.emit($element);
  }

  private initHeaderButtonGroup(): ImageSafe[] {
    return [
      this.headerButtonGroupService.getHomeBtn(),
      this.headerButtonGroupService.get404Btn(),
      this.headerButtonGroupService.getLogOutBtn()
    ];
  }
}
