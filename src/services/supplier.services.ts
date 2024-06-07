import { SupplierType } from "@/redux/reduxTypes";

import data from "@/mock";
import { sleep } from "@/utils/functions";

async function getSuppliers(): Promise<SupplierType[]> {
  const suppliers = data.suppliers;
  await sleep(750);
  return suppliers;
}
async function getSupplier(supplierID: string): Promise<SupplierType | undefined> {
  const suppliers = data.suppliers;
  await sleep(750);
  return suppliers.find(sup => sup.cnpj === supplierID);
}
  
async function createSupplier(supplier: SupplierType): Promise<{success: boolean; message: string}> {
  const currentSuppliers = data.suppliers;
  await sleep(750);
  
  if (currentSuppliers.find(sup => sup.cnpj === supplier.cnpj)) {
    return {
      success: false,
      message: "Este CNPJ ja está cadastrado em um fornecedor"
    };
  }
  
  data.suppliers.push(supplier);
  await sleep(750);
  return {
    success: true,
    message: "Fornecedor cadastrado com sucesso"
  };
}

async function updateSupplier(supplier: SupplierType): Promise<SupplierType> {
  const currentSuppliers = data.suppliers;
  await sleep(750);

  const suppliersArray: SupplierType[] = currentSuppliers;
  const supIndex = suppliersArray.findIndex(sup => sup.cnpj === supplier.cnpj);
  const suppliers = [...suppliersArray.slice(0, supIndex), supplier, ...suppliersArray.slice(supIndex + 1)];
  data.suppliers = suppliers;

  return supplier;
}

async function deleteSupplier(supplierID: string): Promise<string> {
  const currentSuppliers = data.suppliers;
  await sleep(750);

  data.suppliers = currentSuppliers.filter(sup => sup.cnpj !== supplierID);
  return supplierID;
}

const supplierServices = {
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};

export default supplierServices;
