import React from 'react'
import Header from "../components/Home/Header";
import styled from "styled-components";
import CandJob from '../components/Job/CandJob';
import CompJob from '../components/Job/CompJob';

function Jobs() {
  return (
    <Container>
        <Header page={"home"}/>
        <Layout>
           <CompJob/>
        </Layout>
    </Container>
  )
}
const Container = styled.div`
background-color: rgba(0, 0, 0, 0.03);
`;

const Layout = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 15px;
  row-gap: 15px;
  grid-template-rows: auto;
  margin: 12%;
  margin-top:0;
  margin-bottom: 0;
  padding-top: 60px;

  @media (max-width: 768px) {
    margin:5%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Jobs