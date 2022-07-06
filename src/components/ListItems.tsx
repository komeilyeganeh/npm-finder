import React, { useContext } from "react";
import { npmContext } from "../context";
import "./ListItems.css";

const ListItems: React.FC = () => {
  const { packages } = useContext(npmContext);
  return (
    <ul>
      {packages.map((pack: any) => (
        <li key={pack.name}>
          <a href={pack.url} target="_blank">
            {pack.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
