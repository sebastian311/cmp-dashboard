import { Component, contentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.html',
  styleUrl: './control.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  // @ContentChild('input') private control: ElementRef<HTMLInputElement | HTMLTextAreaElement> | undefined;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  private el = inject(ElementRef);
  label = input.required<string>();

  onClick() {
    console.log({
      message: 'Control component clicked',
      label: this.label,
      control: this.control()?.nativeElement.tagName,
      host: this.el.nativeElement.tagName
    });
  }
}