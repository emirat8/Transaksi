export interface IBarang{
    namaBarang: string;
    deskripsi: string;
    harga: number;
}

export interface ITransactionBarang extends IBarang{
    stok: number;
    qty: number;
    subtotal: number;
}