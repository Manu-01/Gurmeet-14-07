import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  GridApi,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import { ButtonComponent } from '../../shared/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss',
})
export class LandingpageComponent implements OnInit {
  rowData: any;
  gridApi!: GridApi;

  constructor(private http: HttpClient, private route: Router) {}
  ngOnInit(): void {
    this.http.get<any>('https://dummyjson.com/users').subscribe((data) => {
      this.rowData = data.users;
    });
  }
  id: Number = 0;
  colDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'Id',
      cellRenderer: (params: any) => {
        return (this.id = params.value);
      },
    },
    {
      field: 'image',
      headerName: 'Image',
      cellRenderer: (params: any) => {
        return `<img src="${params.value}" width="50" height="50" style="border-radius: 50%;" />`;
      },
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      tooltipField: 'firstName',
      cellRenderer: (params: any) => {
        const first = params.data?.firstName || '';
        const last = params.data?.lastName || '';
        const firstInitial = first.charAt(0).toUpperCase();
        const lastInitial = last.charAt(0).toUpperCase();
        const badge = `<span class="badge bg-primary me-1">${firstInitial}${lastInitial}</span>`;
        const fullName = `${first} ${last}`;
        return `${badge} ${fullName}`;
      },
    },
    { field: 'university', headerName: 'UniverSity' },
    {
      field: 'gender',
      headerName: 'Gender',
      cellRenderer: (params: any) => {
        if (params.value === 'male') {
          return `<span class="badge bg-primary">${params.value}</span>`;
        } else {
          return `<span class="badge bg-warning">${params.value}</span>`;
        }
      },
    },
    {
      field: 'address',
      valueFormatter: (Params) => Params.value.city,
      headerName: 'Address',
    },
    { field: 'email', headerName: 'Email', tooltipField: 'email' },
    { field: 'role', headerName: 'Role' },
    { field: 'Action', headerName: 'Actions', cellRenderer: ButtonComponent },
  ];

  gridOptions: GridOptions = {
    defaultColDef: {
      sortable: true,
      filter: true,
      resizable: true,
    },
    context: {
      componentParent: this,
      parentName: 'landing_page',
    },
  };

  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  edit() {
    console.log('edit This component');
  }
  delet() {
    console.log('delet this compoent');
  }

  viewdata(data: any) {
    console.log(data);
    this.route.navigate(['landingpage', data.id]);
  }
  modal: boolean = false;
  openModal() {
    this.modal = !this.modal;
  }
}
