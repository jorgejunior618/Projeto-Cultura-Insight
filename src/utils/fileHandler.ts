"use server"

import { promises as fs } from 'fs';
import { SupplierType } from "@/redux/reduxTypes";

export async function getSuppliersFile() {
  try {
    const data = await fs.readFile('./src/mock.json', 'utf8');
    const json: {suppliers: SupplierType[]} = JSON.parse(data);
    
    if (json.hasOwnProperty('suppliers')) {
      return json.suppliers;
    } else {
      console.error('O arquivo JSON não contém o item "suppliers".');
      return null;
    }
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    return null;
  }
}

export async function setSuppliersFile(supArray: SupplierType[]) {
  try {
    const data = await fs.readFile('./src/mock.json', 'utf8');
    const json: {suppliers: SupplierType[]} = JSON.parse(data);

    if (json.hasOwnProperty('suppliers')) {
      json.suppliers = supArray;
      const newContent = JSON.stringify(json, null, 2);

      await fs.writeFile('./src/mock.json', newContent, 'utf8');

      console.log('O valor do item "suppliers" foi atualizado com sucesso.');
    } else {
      console.error('O arquivo JSON não contém o item "suppliers".');
    }
  } catch (error) {
    console.error('Erro ao ler o arquivo JSON:', error);
    return null;
  }
}