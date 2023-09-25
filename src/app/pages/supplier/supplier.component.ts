import { Component } from '@angular/core';
import { ISupplier } from 'src/app/interfaces/i-supplier';
import { SupplierService } from 'src/app/services/supplier.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  suppliers: ISupplier[] = [];
  selectedSupplier: ISupplier | null = null;

  newSupplier: ISupplier = {
    _id: 0,
    nama: '',
    alamat: '',
    listBarang: []
  };

  upSupplier: ISupplier = {
    _id: 0,
    nama: '',
    alamat: '',
    listBarang: []
  };

  constructor(private supplierService: SupplierService, private modalService: NgbModal) {}

  openAdd(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        console.log("opening")
      }, 
      (reason: any) => {

      }
    )
  }

  openUpdate(content: any, supplier: ISupplier) {
    this.upSupplier = {...supplier};
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result: any) => {
        console.log("opening")
      }, 
      (reason: any) => {

      }
    )
  }


  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe((data) => {
      this.suppliers = data;
      console.log(data)
    });
  }

  createSupplier(): void {
    this.supplierService.addSupplier(this.newSupplier).subscribe(() => {
      this.loadSuppliers();
      this.newSupplier = {
        _id: 0,
        nama: '',
        alamat: '',
        listBarang: []
      };
    });
  }

  updateSupplier(): void {
    this.supplierService.addSupplier(this.upSupplier).subscribe(() => {
      this.loadSuppliers();
      this.upSupplier = {
        _id: 0,
        nama: '',
        alamat: '',
        listBarang: []
      };
    });
  }

  deleteSupplier(suppliers: ISupplier): void {
    if (suppliers && suppliers._id) {
      this.supplierService
        .deleteSupplier(suppliers._id)
        .subscribe(() => {
          this.loadSuppliers();
          this.selectedSupplier = null;
        });
    }
  }
}
