import { Component, ElementRef, HostListener, ViewEncapsulation, viewChild, output } from '@angular/core';
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
  // @ViewChild('form') form!: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string, text: string}>();
  
  @HostListener('click') onClick() {
    console.log('New Tickets Component Form clicked');
  }

  onSubmit(name: HTMLInputElement, request: HTMLTextAreaElement) {
    this.add.emit({
      title: name.value,
      text: request.value
    })
    this.form()?.nativeElement.reset();
  }
}
