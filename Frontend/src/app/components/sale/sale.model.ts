import { Vehicle } from './../vehicle/vehicle.model';
export interface Sale {
  id?: number,
  dataVenda: string,
  valorVenda: number,
  comissaoVendedor: number,
  veiculo: Vehicle
}