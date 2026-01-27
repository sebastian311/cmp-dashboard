import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button';
import { ControlComponent } from "../control/control";

@Component({
  selector: 'app-new-tickets',
  imports: [ButtonComponent, ControlComponent],
  templateUrl: './new-tickets.html',
  styleUrl: './new-tickets.css',
})
export class NewTickets {

}
