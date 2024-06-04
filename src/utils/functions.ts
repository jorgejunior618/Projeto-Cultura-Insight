export const onlyNumbers = (str: string) => str.replace(/\D/g, "");

export const numbersToCNPJ = (str: string) => {
  const cnpj1 = str.substring(0, 2);
  const cnpj2 = str.substring(2, 5);
  const cnpj3 = str.substring(5, 8);
  const cnpj4 = str.substring(8, 12);
  const cnpj5 = str.substring(12);
  
  const cnpj = `${cnpj1}.${cnpj2}.${cnpj3}/${cnpj4}-${cnpj5}`;
  return cnpj;
};