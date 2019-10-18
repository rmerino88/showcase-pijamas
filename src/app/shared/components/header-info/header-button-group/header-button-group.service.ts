import { Injectable } from '@angular/core';
import { TYPE_IMG } from '../../img-safe/img-safe';

@Injectable()
export class HeaderButtonGroupService {
  public getLogOutBtn = () => ({
    name: 'exit_to_app-24px',
    type: TYPE_IMG.SVG,
    alt: 'log out',
    id: HEADER_BTN_IDS.BTNLOGOUT
  });
  public get404Btn = () => ({
    name: 'pan_tool-24px',
    type: TYPE_IMG.SVG,
    alt: '404',
    id: 404
  });
  public getHomeBtn = () => ({
    name: 'home-24px',
    type: TYPE_IMG.SVG,
    alt: 'home',
    id: HEADER_BTN_IDS.BTNHOME
  });
}

export enum HEADER_BTN_IDS {
  BTNLOGOUT,
  BTNHOME
}
