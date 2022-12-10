import SearchPackages from "./components/searchPackages/SearchPackages";
import ListPackages from "./components/listPackages/ListPackages";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <h1>Package search</h1>
        <SearchPackages />
        <ListPackages />
      </div>
      <h1 className="developer-info">
        Developer :{" "}
        <a href="https://komeilyeganeh.ir" target="_blank" className="developer-name">
          Komeil Yeganeh
        </a>
      </h1>
    </>
  );
};

export default App;
