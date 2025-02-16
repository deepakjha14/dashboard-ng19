import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, ModuleRegistry, AllCommunityModule, provideGlobalGridOptions } from 'ag-grid-community';

// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Mark all grids as using legacy themes
provideGlobalGridOptions({ theme: "legacy"});

@Component({
  selector: 'dashboard-ng19-table',
  imports: [ AgGridAngular ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  rowData: any = [
    {
      name: 'John Doe',
      age: 30,
      country: 'USA',
      email: 'john@example.com',
      salary: 75000,
      department: 'Engineering',
      status: 'Active',
      joinDate: '2022-01-15'
    },
    {
      name: 'Mary Smith',
      age: 28,
      country: 'UK',
      email: 'mary@example.com',
      salary: 65000,
      department: 'Marketing',
      status: 'Active',
      joinDate: '2022-03-20'
    },
    {
      name: 'Bob Wilson',
      age: 32,
      country: 'Canada',
      email: 'bob@example.com',
      salary: 80000,
      department: 'Sales',
      status: 'Inactive',
      joinDate: '2021-11-10'
    }
  ];
  gridApi!: GridApi;
  columnDefs: ColDef[] = [
    { 
      field: 'name',
      sortable: true,
      filter: true,
      headerName: 'Full Name'
    },
    { 
      field: 'age',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    { 
      field: 'country',
      sortable: true,
      filter: true
    },
    { 
      field: 'email',
      sortable: true,
      filter: true
    },
    { 
      field: 'salary',
      sortable: true,
      filter: 'agNumberColumnFilter',
      valueFormatter: (params: any) => `$${params.value.toLocaleString()}`
    },
    { 
      field: 'department',
      sortable: true,
      filter: true
    },
    { 
      field: 'status',
      sortable: true,
      filter: true,
      cellRenderer: (params: any) => {
        return `<span class="badge ${params.value === 'Active' ? 'bg-success' : 'bg-danger'}">${params.value}</span>`;
      }
    },
    { 
      field: 'joinDate',
      sortable: true,
      filter: 'agDateColumnFilter',
      valueFormatter: (params: any) => new Date(params.value).toLocaleDateString()
    }
  ];

  onGridReady(evt: any) {
    this.gridApi = evt.gridApi;
  }
}
