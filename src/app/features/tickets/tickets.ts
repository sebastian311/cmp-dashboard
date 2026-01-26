import { Component } from '@angular/core';
import { NewTickets } from "../../shared-ui/new-tickets/new-tickets";

@Component({
  selector: 'app-tickets',
  imports: [NewTickets],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class TicketsComponent {

}
