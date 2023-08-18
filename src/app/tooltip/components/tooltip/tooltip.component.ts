import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `
    <div class="tooltip" [style.left]="left + 'px'" [style.top]="top + 'px'">
      {{ text }}
    </div>
  `,
  styles: [`
    .tooltip {
    position: fixed;
    background-color: black;
    border-radius: 4px;
    color: #ffffff;
    font-family: Arial;
    padding: 3px 6px;
    font-size: 13px;
    margin-top: 5px;
    transform: translateX(-50%);
  }
  
  .tooltip::before {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    position: absolute;
    left: calc(50% - 5px);
    top: -5px;
  }
  
  `]
})
export class TooltipComponent {
  @Input() text = '';
  @Input() left = 0;
  @Input() top = 0;
}
