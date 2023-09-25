import { ISupplier } from "./i-supplier";

export interface ITransaction {
    _id?: number;
    tanggal: string;
    grandTotal: number;
    supplier: ISupplier[];
}
