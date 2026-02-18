import { Component, ViewEncapsulation, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button';
import { ControlComponent } from "../control/control";
import { Ticket } from '../../data-access/models/ticket.model';

@Component({
  selector: 'app-ticket-component',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
  encapsulation: ViewEncapsulation.None
})
export class NewTicketComponent {
  data = input.required<Ticket>();
}
