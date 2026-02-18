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

  onAddTicket(event: {title: string, text: string}) {
    const newTicket: Ticket = {
      id: this.tickets.length + 1,
      title: event.title,
      requestText: event.text,
      status: 'open'
    };
    
    this.tickets.push(newTicket);
    console.log('New ticket added:', newTicket);
  }
}
