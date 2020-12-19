import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { RappelListComponent } from './rappel-list/rappel-list.component';

import { CreateRappelComponent } from './create-rappel/create-rappel.component';

import { DemandeListComponent } from './demande-list/demande-list.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { RappelDetailleComponent } from './rappel-detaille/rappel-detaille.component';
import { DemandeDetaillesComponent } from './demande-detailles/demande-detailles.component';








const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: '', redirectTo: 'rappel', pathMatch: 'full' },
  { path: 'rappels', component:RappelListComponent },
  { path: 'plus', component:CreateRappelComponent },

  { path: 'detaille/:id', component:RappelDetailleComponent },

  { path: '', redirectTo: 'demande', pathMatch: 'full' },
  { path: 'demandes', component:DemandeListComponent },
  { path: 'ajout', component:CreateDemandeComponent },
  { path: 'detailles/:id', component:DemandeDetaillesComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
