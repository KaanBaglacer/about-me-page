import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ButtonModel} from "../../model/button.model";

@Component({
  selector: 'ab-me-navbar',
  template: `
    <div class="ab-me-navbar">
      <button [class]="selectClass(0)" (click)="onTabClicked(0)">
        Genel Bilgiler
      </button>
      <button [class]="selectClass(1)" (click)="onTabClicked(1)">
        Deben
      </button>
      <button [class]="selectClass(2)" (click)="onTabClicked(2)">
        Deben
      </button>
      <button [class]="selectClass(3)" (click)="onTabClicked(3)">
        Deben
      </button>
    </div>
  `,
  styles: [`

  `]
})

export class NavbarComponent implements OnInit {

  @Output() tabIndexEvent: EventEmitter<number> = new EventEmitter<number>();

  buttonVars: ButtonModel[] = [];

  constructor() {
    for (let ind: number = 0; ind < 4; ind++) {
      this.buttonVars.push(<ButtonModel>{
        tabIdx: ind,
        activeClass: 'ab-tab-button-active',
        passiveClass: 'ab-tab-button',
        clickStatus: ind === 0
      });
    }
  }

  ngOnInit(): void {
  }

  onTabClicked(tabIndex: number) {
    this.buttonVars.forEach((buttonVar, index) => {
      buttonVar.clickStatus = tabIndex === index;
    })
    this.tabIndexEvent.emit(tabIndex);
  }

  selectClass(tabIndex: number) {
    return this.buttonVars[tabIndex].clickStatus ?
      this.buttonVars[tabIndex].activeClass :
      this.buttonVars[tabIndex].passiveClass;
  }

}
