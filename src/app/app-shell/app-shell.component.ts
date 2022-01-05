import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ab-me-app-shell',
  template: `
    <ab-me-navbar (tabIndexEvent)="onTabIndexChanged($event)"></ab-me-navbar>
    <ng-container [ngTemplateOutlet]="content"></ng-container>

    <ng-template #content [ngSwitch]="tabIndex">
      <p *ngSwitchCase="0">Tab 1</p>
      <p *ngSwitchCase="1">Tab 2</p>
      <p *ngSwitchCase="2">Tab 3</p>
      <p *ngSwitchCase="3">Tab 4</p>
    </ng-template>
  `,
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {

  tabIndex: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onTabIndexChanged(event: number) {
    this.tabIndex = event;
  }
}
