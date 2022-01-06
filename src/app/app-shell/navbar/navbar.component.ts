import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TopNavBarButtonModel} from "../../model/button.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ab-me-navbar',
  template: `
    <div class="ab-me-navbar">
      <ng-container *ngFor="let button of buttonVars; let idx= index">
        <button [class]="selectClass(idx)" (click)="onTabClicked(idx)">
          {{button.label}}
        </button>
      </ng-container>
    </div>
  `,
  styles: [`

  `]
})

export class NavbarComponent implements OnInit {

  @Output() tabIndexEvent: EventEmitter<number> = new EventEmitter<number>();

  @Input() buttonVars: TopNavBarButtonModel[] | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    console.log(this.buttonVars)
  }

  async onTabClicked(tabIndex: number) {
    if (this.buttonVars) {
      await this.router.navigate([this.buttonVars[tabIndex].route], {
        relativeTo: this.route
      });
      this.buttonVars?.forEach((buttonVar, index) => {
        buttonVar.clickStatus = tabIndex === index;
      })
      this.tabIndexEvent.emit(tabIndex);
    }

  }

  selectClass(tabIndex: number) {
    console.log(tabIndex)
    if (this.buttonVars) {
      return this.buttonVars[tabIndex].clickStatus ?
        this.buttonVars[tabIndex].activeClass :
        this.buttonVars[tabIndex].passiveClass;
    }
    return -1;
  }

}
