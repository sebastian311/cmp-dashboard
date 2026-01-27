import { Component, input } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
})
export class ControlComponent {
  label = input.required<string>();
}
