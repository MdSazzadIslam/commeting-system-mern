import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To Real Time Comenting System",
  description: "Developed by MERN Stack",
  keywords: "Chatting Application, Comenting System, Messgenger",
};

export default Meta;
