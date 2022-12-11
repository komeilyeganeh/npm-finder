import { packageDataType } from "../../state/action-types";
import "./index.scss";

interface ListProps {
  data: { name: string; link: string }[];
}

const ListPackages: React.FC<ListProps> = ({ data }) => {
  return (
    <div className="list-package-wrapper">
      <ul>
        {data.map((item: packageDataType, index) => (
          <li key={index}>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPackages;
