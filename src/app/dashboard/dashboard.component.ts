import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'dashboard-ng19-dashboard',
  imports: [ TableComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
}
