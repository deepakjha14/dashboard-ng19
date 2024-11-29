import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dashboard-ng19-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() title: string|undefined;
  @Output() salutation = new EventEmitter<string>();

  salutationCall() {
    this.salutation.emit("salutation");
  }
}
