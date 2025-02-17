import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'dashboard-ng19-dashboard',
  imports: [ TableComponent, ChartsComponent ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
