import ReactLoading from "react-loading";
import SearchPackages from "./components/searchPackages/SearchPackages";
import ListPackages from "./components/listPackages/ListPackages";
import { useTypedSelector } from "./hooks/useTypeSelector";

const App = () => {
  const { data, loading, error } = useTypedSelector((state) => state.packages);
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title-app">Package search</h1>
        <SearchPackages />
        <ListPackages data={data} />
        {loading && (
          <ReactLoading type="bars" color="#EB6440" width={50} height={50} />
        )}
        {error && <h3>{error}</h3>}
      </div>
      <h1 className="developer-info">
        Developer :{" "}
        <a
          href="https://komeilyeganeh.ir"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-name"
        >
          Komeil Yeganeh
        </a>
      </h1>
    </div>
  );
};

export default App;
