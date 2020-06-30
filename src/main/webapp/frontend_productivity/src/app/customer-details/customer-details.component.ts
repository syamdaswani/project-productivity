import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: Customer;
  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    const customerId = +this.activatedRoute.snapshot.paramMap.get('id');
    this.customer = this.customerService.getCustomerById(customerId);
    console.log('CUSTOMER DETAILS', this.customer);
  }

}
