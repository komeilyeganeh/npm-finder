import React, { useContext } from "react";
import { npmContext } from "../context";
import Form from "./Form";
import ListItems from "./ListItems";
import ReactLoading from "react-loading";
import "./ListPackages.css";

const ListPackages: React.FC = () => {
  const { searchPackage, loading, notFound } = useContext(npmContext);

  return (
    <div className="container">
      <Form onSubmit={searchPackage} />
      {loading && (
        <ReactLoading type="spin" width={25} height={25} className="spin" />
      )}
      {!loading && <ListItems />}
      {notFound && <div className="error">Not Found !</div>}
    </div>
  );
};

export default ListPackages;
