"use client"

import { useCallback, useEffect } from "react";
import { Dropdown } from "antd";
import { DeleteOutlined, EditOutlined, MoreOutlined, ReloadOutlined } from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { fontSizes, fontWeights } from "@/constants";
import Card from "@/components/card";

import { DropdownOption, HomeContainer } from "./page.styled";
import { homeActions } from "@/redux/home/homeSlice";
import { CustomSpin } from "@/components/customSpin";

export default function Home() {
  const homeState = useAppSelector(state => state.homeState);
  const dispatch = useAppDispatch();

  const refreshSuppliers = useCallback(() => {
    dispatch(homeActions.searchSuppliers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(homeActions.searchSuppliers());
  }, [dispatch])
  return (
    <HomeContainer>
    <h1 className={fontSizes.big}>Seus Fornecedores</h1>
    <div id="reload">
      <p onClick={refreshSuppliers} title="Atualizar lista"><ReloadOutlined /></p>
    </div>
    <ul>
      <CustomSpin spinning={homeState.loading}>
      {homeState.suppliers.map(supplier => (
      <Card key={supplier.cnpj}>
        <section>
          <h2 className={fontSizes.medium + ' ' + fontWeights.bold}>
            {supplier.name + ' '}
            <span className={fontSizes.regular + ' ' + fontWeights.regular}>(nome fantasia: {supplier.alternativeName})</span>
          </h2>
          <p>CNPJ: {supplier.cnpj}</p>
          <p>{supplier.address.line_one}</p>
          <p>{supplier.address.line_two || null}</p>
          <p>{supplier.address.state} - {supplier.address.country}</p>
        </section>

        <Dropdown
          trigger={['click']}
          menu={{ items: [
          {
            label: (<DropdownOption className="editOption">Editar <EditOutlined /></DropdownOption>),
            key: '0'
          },
          {
            label: (<DropdownOption className="deleteOption">Excluir <DeleteOutlined /></DropdownOption>),
            key: '1'
          }
        ]}}>
          <section className="options">
          <MoreOutlined />
          </section>
        </Dropdown>
      </Card>
      ))}
      </CustomSpin>
    </ul>
    </HomeContainer>
  );
}
