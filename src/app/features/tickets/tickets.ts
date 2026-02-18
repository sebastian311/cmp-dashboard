import { Component } from '@angular/core';
import { NewTickets } from "../../shared-ui/new-tickets/new-tickets";
import { Ticket } from '../../data-access/models/ticket.model';

@Component({
  selector: 'app-tickets',
  imports: [NewTickets],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];
}
