import { Component, input } from '@angular/core';
import { Ticket } from '../../data-access/models/ticket.model';

@Component({
  selector: 'app-ticket-component',
  imports: [],
  templateUrl: './new-ticket.html',
  styleUrls: ['./new-ticket.css']
})
export class NewTicketComponent {
  data = input.required<Ticket>();
}
