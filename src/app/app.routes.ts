import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ChartsComponent } from './charts/charts.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'charts',
        component: ChartsComponent
    },
    {
        path: 'tables',
        component: TableComponent
    },
];
