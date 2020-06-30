import { Injectable } from '@angular/core';
import {Customer} from '../models/customer';

const CUSTOMER_DATA: Customer[] = [
  {id: 1, name: 'Syam Daswani', work_position: 'Senior Analyst', email: 'syamasundar.daswani@gmail.com', mobile_num: '0912345', phone_num: '12345', last_contacted: ''},
  {id: 2, name: 'Marga Daswani', work_position: 'Financial Advisor', email: 'me2@email.com', mobile_num: '0954321', phone_num: '54321', last_contacted: ''},
];

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers(): Customer[] {
    return CUSTOMER_DATA;
  }

  getCustomerById(id: number): Customer {
    let customer: Customer;
    CUSTOMER_DATA.forEach((value) => {
      if (value.id === id) {
        customer = value;
      }
    });
    return customer;
  }

}
