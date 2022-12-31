import React from "react";
import Form from "../../Components/PageComponents/Form/Form/index";
import Headline from "../../Components/PageComponents/Header/index";
import Layout from "../../HOC/layout";
const index = () => {
  return (
    <Layout>
      <Headline Headline={"Contact Us"} />
      <Form />
    </Layout>
  );
};

export default index;
