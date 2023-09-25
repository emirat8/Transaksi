import { IBarang } from "./i-barang";

export interface ISupplier {
    _id?: number;
    nama: string;
    alamat: string;
    listBarang: IBarang[];
}
