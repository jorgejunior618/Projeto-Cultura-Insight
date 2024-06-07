import { numbersToCNPJ, onlyNumbers } from "@/utils/functions"

import { useMemo } from "react";
import supplierServices from "@/services/supplier.services";
import SupplierForm from "../form";

export async function generateStaticParams() {
  const suppliers = await supplierServices.getSuppliers();

  return suppliers.map((sup) => ({ id: onlyNumbers(sup.cnpj) }));
}
 
export default function Supplier({ params }: { params: { id: string } }) {
  const supplierID = useMemo(() => numbersToCNPJ(params.id), [params.id]);

  return (<SupplierForm supplierID={supplierID} />);
}