"use client"

import { fontSizes, fontWeights } from "@/constants";
import { DropdownOption, HomeContainer } from "./page.styled";
import Card from "@/components/card";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";

import mockData from '@/mock.json';
import { Dropdown } from "antd";

export default function Home() {
  return (
    <HomeContainer>
    <h1 className={fontSizes.big}>Seus Fornecedores</h1>
    {
      mockData.fornecedores.map(fornecedor => (
      <Card>
        <section>
          <h2 className={fontSizes.medium + ' ' + fontWeights.bold}>
            {fornecedor.name + ' '}
            <span className={fontSizes.regular + ' ' + fontWeights.regular}>(nome fantasia: {fornecedor.alternativeName})</span>
          </h2>
          <p>CNPJ: {fornecedor.cnpj}</p>
          <p>{fornecedor.address.line_one}</p>
          <p>{fornecedor.address.line_two || null}</p>
          <p>{fornecedor.address.state} - {fornecedor.address.country}</p>
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
      ))
    }
    </HomeContainer>
  );
}
