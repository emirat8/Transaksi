import { Component } from '@angular/core';
import { ITransaction } from 'src/app/interfaces/i-transaction';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionService } from 'src/app/services/transaction.service';
import { ISupplier } from 'src/app/interfaces/i-supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import { ITransactionBarang } from 'src/app/interfaces/i-barang';
import { IBarang } from 'src/app/interfaces/i-barang';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  transactions: ITransaction[] = [];
  transactionBarangs: ITransactionBarang[] = [];
  suppliers: ISupplier[] = [];
  selectedValue = '';

  newTransaction: ITransaction = {
    _id: 0,
    tanggal: '',
    grandTotal: 0,
    supplier: []
  };

  constructor(private transactionService: TransactionService, private modalService: NgbModal, private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.loadTransactions();
    this.loadSuppliers();
  }

  loadTransactions() {
    this.transactionService.getTransaction().subscribe((data) => {
      this.transactions = data;
      console.log(data)
    });
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe((data) => {
      this.suppliers = data;
      console.log(data)
    });
  }

  getSelectedValue(value:any) {
    this.selectedValue = value;
  }
  openAddTransaction(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        console.log("opening")
      }, 
      (reason: any) => {

      }
    )
  }

  createTransaction(): void {
    this.transactionService.addTransaction(this.newTransaction).subscribe(() => {
      this.loadSuppliers();
      this.newTransaction = {
        _id: 0,
        tanggal: '',
        grandTotal: 0,
        supplier: []
      };
    });
  }

  // createTransaction(): void {
  //   this.transactionService.addTransaction(this.newTransaction).subscribe(() => {
  //     this.loadTransactions();
  //     this.newTransaction = {
  //       _id: 0,
  //       tanggal: '',
  //       grandTotal: 0,
  //       supplier: []
  //     };
  //   });
  // }
}
