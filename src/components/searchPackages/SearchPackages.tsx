import "./index.scss";

const SearchPackages: React.FC = () => {
  return (
    <div className="form-wrapper">
      <form className="form">
        <div className="input-group">
          <input type="text" placeholder=" " />
          <label className="label">Enter package name...</label>
        </div>
        <button className="btn">Search</button>
      </form>
    </div>
  );
};

export default SearchPackages;
