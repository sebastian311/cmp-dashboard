import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button';
import { ControlComponent } from "../control/control";

@Component({
  selector: 'app-new-tickets',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.html',
  styleUrl: './new-tickets.css',
  encapsulation: ViewEncapsulation.None
})
export class NewTickets {
  @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  private el = inject(ElementRef);
  
  @HostListener('click') onClick() {
    console.log('New Tickets Component Form clicked');
  }

  onSubmit(name: HTMLInputElement, request: HTMLTextAreaElement) {
    console.log('Form submitted with name:', name.value);
    console.log('Form submitted with request:', request.value);
    this.form?.nativeElement.reset();
  }
}
