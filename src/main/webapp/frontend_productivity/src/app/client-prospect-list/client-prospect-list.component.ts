import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-client-prospect-list',
  templateUrl: './client-prospect-list.component.html',
  styleUrls: ['./client-prospect-list.component.css']
})
export class ClientProspectListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'mobile_num', 'phone_num', 'last_contacted'];
  dataSource: any;
  constructor(private customerService: CustomerService) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    let customerData: Customer[] = this.customerService.getCustomers();
    this.dataSource = new MatTableDataSource(customerData);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
