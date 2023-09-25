import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { TransactionComponent } from './pages/transaction/transaction.component';

const routes: Routes = [
  { path: 'supplier', component: SupplierComponent },
  { path: '', component: TransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
