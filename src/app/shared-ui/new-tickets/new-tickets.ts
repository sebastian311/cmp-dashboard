import { Component, ElementRef, HostListener, ViewEncapsulation, inject } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { ControlComponent } from "../control/control";

@Component({
  selector: 'app-new-tickets',
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-tickets.html',
  styleUrl: './new-tickets.css',
  encapsulation: ViewEncapsulation.None
})
export class NewTickets {
  private el = inject(ElementRef);
  
  @HostListener('click') onClick() {
    console.log('New Tickets Component Form clicked');
  }
}
