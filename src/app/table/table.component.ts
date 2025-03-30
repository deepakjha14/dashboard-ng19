import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, ModuleRegistry, AllCommunityModule, provideGlobalGridOptions } from 'ag-grid-community';
import { SharedService } from '../../shared/shared.serice';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Register all community features
ModuleRegistry.registerModules([AllCommunityModule]);

// Mark all grids as using legacy themes
provideGlobalGridOptions({ theme: "legacy"});

@Component({
  selector: 'dashboard-ng19-table',
  imports: [ AgGridAngular, ReactiveFormsModule ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
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
  
  studentsForm: FormGroup;

  get nameControl(): FormControl {
    return this.studentsForm.get('name') as FormControl;
  }

  get ageControl(): FormControl {
    return this.studentsForm.get('age') as FormControl;
  }

  get countryControl(): FormControl {
    return this.studentsForm.get('country') as FormControl;
  }

  get emailControl(): FormControl {
    return this.studentsForm.get('email') as FormControl;
  }

  get salaryControl(): FormControl {
    return this.studentsForm.get('salary') as FormControl;
  }

  get departmentControl(): FormControl {
    return this.studentsForm.get('department') as FormControl;
  }

  get statusControl(): FormControl {
    return this.studentsForm.get('status') as FormControl;
  }

  get joinDatControl(): FormControl {
    return this.studentsForm.get('joinDate') as FormControl;
  }

  constructor(private sharedService: SharedService, private fb: FormBuilder) {
    this.studentsForm = this.fb.group({
      name: ['', [ Validators.required ]],
      age: ['', [ Validators.required, Validators.min(1) ]],
      country: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.email ]],
      salary: ['', [ Validators.required, Validators.min(1000) ]],
      department: ['', [ Validators.required ]],
      status: ['', [ Validators.required ]],
      joinDate: ['', [ Validators.required ]]
    });
  }

  ngOnInit(): void {
      this.sharedService.getStudents().subscribe({
        next: (res: any) => {
          this.rowData = res;
        },
        error: (err: any) => {
          console.log(err);
        }
      });
  }

  onGridReady(evt: any) {
    this.gridApi = evt.gridApi;
  }

  submitForm() {
    this.sharedService.saveData({...this.studentsForm.value, " name": this.nameControl.value }).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
