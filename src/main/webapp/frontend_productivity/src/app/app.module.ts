import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientProspectListComponent } from './client-prospect-list/client-prospect-list.component';
import {MatFormFieldModule,
  MatTableModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatSelectModule,
  MatTabsModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: ClientProspectListComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientProspectListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
