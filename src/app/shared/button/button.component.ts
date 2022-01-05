import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ab-me-button',
  template: `
    <button (click)="onClick()" [class]="buttonStyleClass">
      <i *ngIf="iconClass?.length !== 0" class="fas fa-bars" style="height: 15px;width: 15px;"></i>
      {{buttonLabel}}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() iconClass: string | undefined;
  @Input() buttonLabel: string = "";
  @Input() buttonStyleClass: string = "";
  @Input() onClick: () => void = () => {
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
