import { SupplierType } from "@/redux/reduxTypes";

import mockData from '@/mock.json';

function getSuppliers(): SupplierType[] {
  const suppliers = localStorage.getItem("dev-insightlab-suppliers")
  if (!suppliers) {
    localStorage.setItem("dev-insightlab-suppliers", JSON.stringify(mockData.suppliers));
    return mockData.suppliers;
  }
  return JSON.parse(suppliers);
}
function getSupplier(supplierID: string): SupplierType | undefined {
  const suppliers = localStorage.getItem("dev-insightlab-suppliers");
  if (!suppliers) {
    localStorage.setItem("dev-insightlab-suppliers", JSON.stringify(mockData.suppliers));
    return mockData.suppliers.find(sup => sup.cnpj === supplierID);
  }
  const suppliersArr: SupplierType[] = JSON.parse(suppliers);

  return suppliersArr.find(sup => sup.cnpj === supplierID);
}

function createSupplier(supplier: SupplierType): SupplierType[] {
  const currentSuppliers = localStorage.getItem("dev-insightlab-suppliers")
  if (!currentSuppliers) {
    localStorage.setItem("dev-insightlab-suppliers", JSON.stringify([...mockData.suppliers, supplier]));
    return [...mockData.suppliers, supplier];
  }
  
  const suppliers = [...JSON.parse(currentSuppliers), supplier];
  localStorage.setItem("dev-insightlab-suppliers", JSON.stringify(suppliers));
  return suppliers;
}

function updateSupplier(supplier: SupplierType): SupplierType[] {
  const currentSuppliers = localStorage.getItem("dev-insightlab-suppliers")
  if (!currentSuppliers) {
    const suppliersArray: SupplierType[] = mockData.suppliers;
    const supIndex = suppliersArray.findIndex(sup => sup.cnpj === supplier.cnpj);
    const suppliers = [...suppliersArray.slice(0, supIndex), supplier, ...suppliersArray.slice(supIndex + 1)];
    localStorage.setItem("dev-insightlab-suppliers", JSON.stringify(suppliers));
    return suppliers;
  }

  const suppliersArray: SupplierType[] = JSON.parse(currentSuppliers);
  const supIndex = suppliersArray.findIndex(sup => sup.cnpj === supplier.cnpj);
  const suppliers = [...suppliersArray.slice(0, supIndex), supplier, ...suppliersArray.slice(supIndex + 1)];
  localStorage.setItem("dev-insightlab-suppliers", JSON.stringify(suppliers));
  return suppliers;
}

function deleteSupplier(supplierID: string): SupplierType[] {
  const currentSuppliers = localStorage.getItem("dev-insightlab-suppliers")
  if (!currentSuppliers) {
    const suppliersArray: SupplierType[] = mockData.suppliers;
    const suppliers = suppliersArray.filter(sup => sup.cnpj !== supplierID);
    localStorage.setItem("dev-insightlab-suppliers", JSON.stringify(suppliers));
    return suppliers;
  }

  const suppliersArray: SupplierType[] = JSON.parse(currentSuppliers);
  const suppliers = suppliersArray.filter(sup => sup.cnpj !== supplierID);
  localStorage.setItem("dev-insightlab-suppliers", JSON.stringify(suppliers));
  return suppliers;
}

export default {
  getSuppliers,
  getSupplier,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};