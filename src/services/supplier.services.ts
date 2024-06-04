import { SupplierType } from "@/redux/reduxTypes";
import mockData from '@/mock.json';
import { getSuppliersFile, setSuppliersFile } from "@/utils/fileHandler";

async function getSuppliers(): Promise<SupplierType[]> {
  const suppliers = await getSuppliersFile();
  if (!suppliers) {
    return mockData.suppliers;
  }
  return suppliers;
}
async function getSupplier(supplierID: string): Promise<SupplierType | undefined> {
  const suppliers = await getSuppliersFile();
  if (!suppliers) {
    return mockData.suppliers.find(sup => sup.cnpj === supplierID);
  }
  return suppliers.find(sup => sup.cnpj === supplierID);
}

async function createSupplier(supplier: SupplierType): Promise<SupplierType[]> {
  const currentSuppliers = await getSuppliersFile();
  if (!currentSuppliers) {
  setSuppliersFile([...mockData.suppliers, supplier]);
  return [...mockData.suppliers, supplier];
  }
  
  const suppliers = [...currentSuppliers, supplier];
  setSuppliersFile(suppliers);
  return suppliers;
}

async function updateSupplier(supplier: SupplierType): Promise<SupplierType[]> {
  const currentSuppliers = await getSuppliersFile();
  if (!currentSuppliers) {
    const suppliersArray: SupplierType[] = mockData.suppliers;
    const supIndex = suppliersArray.findIndex(sup => sup.cnpj === supplier.cnpj);
    const suppliers = [...suppliersArray.slice(0, supIndex), supplier, ...suppliersArray.slice(supIndex + 1)];
    setSuppliersFile(suppliers);
    return suppliers;
  }

  const suppliersArray: SupplierType[] = currentSuppliers;
  const supIndex = suppliersArray.findIndex(sup => sup.cnpj === supplier.cnpj);
  const suppliers = [...suppliersArray.slice(0, supIndex), supplier, ...suppliersArray.slice(supIndex + 1)];
  setSuppliersFile(suppliers);
  return suppliers;
}

async function deleteSupplier(supplierID: string): Promise<SupplierType[]> {
  const currentSuppliers = localStorage.getItem("dev-insightlab-suppliers")
  if (!currentSuppliers) {
    const suppliersArray: SupplierType[] = mockData.suppliers;
    const suppliers = suppliersArray.filter(sup => sup.cnpj !== supplierID);
    setSuppliersFile(suppliers);
    return suppliers;
  }

  const suppliersArray: SupplierType[] = JSON.parse(currentSuppliers);
  const suppliers = suppliersArray.filter(sup => sup.cnpj !== supplierID);
  setSuppliersFile(suppliers);
  return suppliers;
}

export default {
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};