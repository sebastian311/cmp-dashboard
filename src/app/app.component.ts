import { Component } from '@angular/core';
import { HeaderComponent } from './shared-ui/header-component/header-component';
import { ServerStatusComponent } from './features/server-status/server-status';
import { TrafficComponent } from './features/traffic/traffic';
import { TicketsComponent } from './features/tickets/tickets';
import { DashboardItemComponent } from './shared-ui/dashboard-item/dashboard-item';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {}
