"use client"

import { useAppDispatch, useAppSelector } from "@/hooks";
import { ChangeEvent, Suspense, useCallback, useEffect, useState } from "react";
import { supplierActions } from "@/redux/supplier/supplierSlice";
import { SupplierEditingType } from "@/redux/reduxTypes";
import { Col, Input, Row, Spin, message } from "antd";
import { FormWrapper, InputWrapper } from "./styled";
import MasekdInput from "@/components/maskedInput";
import { fontSizes, fontWeights } from "@/constants";
import CustomButton from "@/components/button";

type FormParams = {
  supplierID: string;
}
export default function SupplierForm({supplierID}: FormParams) {
  const supplierState = useAppSelector(state => state.supplierState);
  const [ postCode, setPostCode ] = useState("");
  const [ loadingPostCode, setLoadingPostCode ] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (supplierState.supplier.cnpj.length === 0 && supplierID.length !== 0) {
      dispatch(supplierActions.searchSupplier(supplierID))
    }
  }, [dispatch]);

  const getPostCodeData = useCallback(async (
    pc: string,
    cbfn?: (a:{
      line_one: string;
      line_two: string;
      state: string;
      country: string;
    }) => any
  ) => {
    setLoadingPostCode(true);

    try {
      const response = await fetch('https://brasilapi.com.br/api/cep/v1/' + pc);
      const pcAddres: {
        cep: string;
        state: string;
        city: string;
        neighborhood: string;
        street: string;
        service: string;
      } = await response.json();

      const add = {
        line_one: `${pcAddres.street}, ${pcAddres.neighborhood}, ${pcAddres.city}`,
        line_two: "",
        number: "",
        state: pcAddres.state,
        country: "Brasil"
      }

      if(cbfn) cbfn(add);
    } catch (error) {
      console.log({errorPostCode: error});
      message.error("Erro ao obter dados do cosido postal");
    } finally {
      setLoadingPostCode(false);
    }
  }, [supplierState.supplier, setPostCode]);
  
  const handleChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "name" || name === "alternativeName" || name === "cnpj"){
      const change: SupplierEditingType = {};
      change[name] = value;
      dispatch(supplierActions.modifySupplier(change));
    }
  }, [dispatch, supplierState.supplier]);

  const handleChangeAddresInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "line_one" || name === "line_two" || name === "state"|| name === "country") {
      const change: SupplierEditingType = {};
      change.address = {};
      
      change.address[name] = value;
      dispatch(supplierActions.modifySupplier(change));
    } else if (name === "postCode" ) {
      setPostCode(value);

      if (value.length === 8) {
        getPostCodeData(
          value,
          add => dispatch(supplierActions.modifySupplier({address: add}))
        );
      }
    }
  }, [dispatch, supplierState.supplier]);

  return <FormWrapper>
    <h1
      className={fontSizes.xtraBig + ' ' + fontWeights.bold}
    >{supplierState.editing ? "Atualização" : "Cadastro"} de fornecedor</h1>

    <section className="formSection first">
      <Spin spinning={supplierState.loading}>
      <h2
        className={fontSizes.big + ' ' + fontWeights.bold}
      >Dados básicos</h2>
      <Row>
        <Col span={24}>
          <InputWrapper>
            <label htmlFor="cnpj">CNPJ</label>
            <MasekdInput
              value={supplierState.supplier.cnpj}
              readOnly={supplierState.editing}
              disabled={supplierState.editing || supplierState.loading}
              name="cnpj"
              maxLength={18}
              onChange={handleChangeInput}
              placeholder="XX.XXX.XXX/XXXX-XX"
              mask="00.000.000/0000-00"
              style={{width: "190px"}}
            />
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <InputWrapper>
            <label htmlFor="name">Nome</label>
            <Input
              value={supplierState.supplier.name}
              name="name"
              onChange={handleChangeInput}
              placeholder="Nome do fornecedor"
            />
          </InputWrapper>
        </Col>

        <Col span={12}>
          <InputWrapper>
            <label htmlFor="alternativeName">Nome Fantasia</label>
            <Input
              value={supplierState.supplier.alternativeName}
              name="alternativeName"
              onChange={(e) => console.log(e.target.value)}
              placeholder="Nome Fantasia do fornecedor"
            />
          </InputWrapper>
        </Col>
      </Row>
      </Spin>
    </section>

    <section className="formSection">
      <Spin spinning={supplierState.loading || loadingPostCode}>
      <h2
        className={fontSizes.big + ' ' + fontWeights.bold}
      >Endereço</h2>

      <Row>
        <Col span={12}>
          <InputWrapper>
            <label htmlFor="postCode" title="Rua, nº, Bairro e Cidade">CEP (Opcional)</label>
            <Input
              value={postCode}
              name="postCode"
              onChange={handleChangeAddresInput}
              placeholder="Código postal"
              style={{width: "190px"}}
            />
          </InputWrapper>
        </Col>
        <Col span={6}>
          <InputWrapper>
            <label htmlFor="state" title="Rua, nº, Bairro e Cidade">Estado</label>
            <Input
              value={supplierState.supplier.address.state}
              name="state"
              onChange={handleChangeAddresInput}
              placeholder="Estado ou província"
            />
          </InputWrapper>
        </Col>
        <Col span={6}>
          <InputWrapper>
            <label htmlFor="country">País</label>
            <Input
              value={supplierState.supplier.address.country ?? ""}
              name="country"
              onChange={handleChangeInput}
              placeholder="Proximidades, bloco/etapa"
            />
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col span={18}>
          <InputWrapper>
            <label htmlFor="line_one" title="Rua, Bairro e Cidade">Endereço</label>
            <Input
              value={supplierState.supplier.address.line_one}
              name="line_one"
              onChange={handleChangeAddresInput}
              placeholder="Rua __, Bairro, Cidade"
            />
          </InputWrapper>
        </Col>
        <Col span={6}>
          <InputWrapper>
            <label htmlFor="number">Número</label>
            <Input
              value={supplierState.supplier.address.number}
              name="number"
              onChange={handleChangeAddresInput}
              placeholder="9999"
            />
          </InputWrapper>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <InputWrapper>
            <label htmlFor="line_two">Complemento</label>
            <Input
              value={supplierState.supplier.address.line_two ?? ""}
              name="line_two"
              onChange={handleChangeAddresInput}
              placeholder="Proximidades, bloco/etapa"
            />
          </InputWrapper>
        </Col>
      </Row>
      </Spin>
    </section>
    <CustomButton
    className={fontSizes.regular}
    id="home"
    onClick={() => null}
  >
    {supplierState.editing ? "Atualzar" : "Adicionar"}
  </CustomButton>
  </FormWrapper>
}