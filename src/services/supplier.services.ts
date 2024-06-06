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
    if (mockData.suppliers.find(sup => sup.cnpj === supplier.cnpj)) throw new Error("Este CNPJ ja está cadastrado em um fornecedor");
    setSuppliersFile([...mockData.suppliers, supplier]);
    return [...mockData.suppliers, supplier];
  }
  if (currentSuppliers.find(sup => sup.cnpj === supplier.cnpj)) throw new Error("Este CNPJ ja está cadastrado em um fornecedor");
  
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
  const currentSuppliers = await getSuppliersFile();
  if (!currentSuppliers) {
    const suppliersArray: SupplierType[] = mockData.suppliers;
    const suppliers = suppliersArray.filter(sup => sup.cnpj !== supplierID);
    setSuppliersFile(suppliers);
    return suppliers;
  }

  const suppliersArray: SupplierType[] = currentSuppliers;
  const suppliers = suppliersArray.filter(sup => sup.cnpj !== supplierID);
  setSuppliersFile(suppliers);
  return suppliers;
}

const supplierServices = {
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};

export default supplierServices;
