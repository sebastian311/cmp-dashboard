import { Component, input, signal, output } from '@angular/core';
import { Ticket } from '../../data-access/models/ticket.model';

@Component({
  selector: 'app-ticket-component',
  imports: [],
  templateUrl: './new-ticket.html',
  styleUrls: ['./new-ticket.css']
})
export class NewTicketComponent {
  close = output();
  data = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
