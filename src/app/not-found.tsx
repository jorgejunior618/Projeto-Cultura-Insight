"use client"

import { colors, fontSizes, fontWeights } from "@/constants";
import Link from "next/link";
import styled from "styled-components";

const NotFoundWrapper = styled.section`
  height: calc(100vh - 110px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12vw 20vh;
  position: relative;
  
  div {
    padding: 10px 15px;
    width: fit-content;
    background-color: #0003;
    z-index: 4;
    border-radius: 15px;

    h1 {
      display: flex;
      color: #4AC2DB;
      font-size: 4rem;
    }
    p {
      display: flex;
      margin: 15px 0 0;
    }
    a {
      padding: 15px 0;
      display: flex;
      transition: font-weight .3s, text-decoration .3s;
      font-weight: bold;
      text-decoration: underline;
    }
  }
  img {
    position: absolute;
    right: 0;
    width: 88%;
    z-index: 1;
    border-radius: 50px;
  }
  @media only screen and (max-width: 800px) {
    padding: 0 0 15vh;
    div {      
      h1 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1rem;
      }
      a {
        font-size: 1rem;
      }
    } 

    img {
      width: 100%;
      border-radius: 30px;
    }
  }
`;

export default function PaginaTeste () {
  return (
    <NotFoundWrapper>
      <div>
        <h1 className={fontWeights.xtraBold}>Eita!</h1>
        <p className={fontSizes.medium}>Parece que nos perdemos na jornada!</p>
        <Link className={fontSizes.medium} href="/">Que tal voltar para o inicio?!</Link>
      </div>
      <img src="/images/lost.jpg" alt="" />
    </NotFoundWrapper>
  );
}