"use client"

import { useCallback, useEffect } from "react";
import { Dropdown } from "antd";
import { DeleteOutlined, EditOutlined, MoreOutlined, ReloadOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { containers, fontSizes, fontWeights } from "@/constants";
import Card from "@/components/card";

import { DropdownOption, HomeContainer } from "./page.styled";
import { homeActions } from "@/redux/home/homeSlice";
import { CustomSpin } from "@/components/customSpin";
import { supplierActions } from "@/redux/supplier/supplierSlice";
import { SupplierType } from "@/redux/reduxTypes";
import { useRouter } from "next/navigation";
import { onlyNumbers } from "@/utils/functions";
import CustomButton from "@/components/button";

export default function Home() {
  const sessionState = useAppSelector(state => state.sessionState);
  const homeState = useAppSelector(state => state.homeState);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const refreshSuppliers = useCallback(() => {
    dispatch(homeActions.searchSuppliers());
  }, [dispatch]);
  const deleteSupplier = useCallback((supID: string) => {
    dispatch(homeActions.removeSupplier(supID));
  }, [dispatch]);
  const goToSupplierForm = useCallback((supplier?: SupplierType) => {
    if (supplier) {
      dispatch(supplierActions.initEditingSupplier(supplier));
      router.push(`/supplier/${onlyNumbers(supplier.cnpj)}`);
    } else {
      router.push('/supplier');
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(homeActions.searchSuppliers());
  }, [dispatch]);

  return (
  <>
  <HomeContainer>
    <h1 className={fontSizes.big}>Seus Fornecedores</h1>
    <div id="reload">
      <p onClick={refreshSuppliers} title="Atualizar lista"><ReloadOutlined /></p>
    </div>
    <ul>
      {homeState.loading ? <CustomSpin spinning fullscreen /> : null}
      {homeState.suppliers.map(supplier => (
      <Card
        key={supplier.cnpj}
        options={{ items: [
          {
            label: (<DropdownOption className="editOption" onClick={() => goToSupplierForm(supplier)}>
              Editar <EditOutlined />
            </DropdownOption>),
            key: '0'
          },
          {
            label: (<DropdownOption className="deleteOption" onClick={() => deleteSupplier(supplier.cnpj)}>
              Excluir <DeleteOutlined />
            </DropdownOption>),
            key: '1'
          }
        ]}}
      >
        <section>
          <h2 className={fontSizes.medium + ' ' + fontWeights.bold}>
            {supplier.name + ' '}
            <span className={fontSizes.regular + ' ' + fontWeights.regular}>(nome fantasia: {supplier.alternativeName})</span>
          </h2>
          <p>CNPJ: {supplier.cnpj}</p>
          <p>{supplier.address.line_one}</p>
          <p>{supplier.address.number ? `Nº ${supplier.address.number}` : "S.N."}</p>
          <p>{supplier.address.line_two || null}</p>
          <p>{supplier.address.state} - {supplier.address.country}</p>
        </section>
      </Card>
      ))}
    </ul>

  {sessionState.user && sessionState.user.addSupplier ? <CustomButton
      className={fontSizes.regular}
      floating
      id="home"
      onClick={() => goToSupplierForm()}
    >
      <span className={fontWeights.bold + ' ' + fontSizes.xtraBig}>+</span>
      <span className={fontWeights.bold + ' ' + fontSizes.regular}>&nbsp;Fornecedor</span>
    </CustomButton> : null}
  </HomeContainer>
  </>
  );
}
