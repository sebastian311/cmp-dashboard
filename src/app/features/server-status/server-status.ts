import { Component, OnInit, OnDestroy, ChangeDetectorRef, signal, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private interval: any;

  constructor(private cdr: ChangeDetectorRef) {
    effect(() => {
      console.log("Current server status:", this.currentStatus());
    });
  }

  ngOnInit() {
    // console.log('ServerStatus component initialized');
    this.interval = setInterval(() => {
      const randomValue = Math.random();
      // console.log('Random value:', randomValue);
      
      if (randomValue < 0.5) {
        this.currentStatus.set('online');
      } else if (randomValue < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
      
      // console.log('Status updated to:', this.currentStatus);
      this.cdr.detectChanges();
    }, 2000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
