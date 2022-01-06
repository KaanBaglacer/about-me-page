import {Component, OnInit} from '@angular/core';
import {TopNavBarButtonModel} from "../model/button.model";

@Component({
  selector: 'ab-me-app-shell',
  template: `
    <ab-me-navbar [buttonVars]="topNavButtonVars"></ab-me-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  tabIndex: number = 0;

  topNavButtonVars: TopNavBarButtonModel[];

  constructor() {
    this.topNavButtonVars = [
      {
        tabIdx: 0,
        activeClass: 'ab-tab-button-active',
        passiveClass: 'ab-tab-button',
        route: 'home',
        label: 'Home',
        clickStatus: true
      },
      {
        tabIdx: 1,
        activeClass: 'ab-tab-button-active',
        passiveClass: 'ab-tab-button',
        route: 'about-me',
        label: 'About Me',
        clickStatus: false
      }
    ];
  }

  ngOnInit(): void {

  }

}
