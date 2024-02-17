"use client"

import Layout from "./Layout";
import Home from "../components/Home";

const index = ({darkmode}) => {
  return (
    <Layout>
      <Home darkmode={darkmode}/>
    </Layout>
  );
}

export default index
