import { FormEvent, useState } from "react";
import { useActions } from "../../hooks/useActions";
import "./index.scss";

const SearchPackages: React.FC = () => {
  const [value, setValue] = useState('');
  const { searchPackages } = useActions();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue("");
    searchPackages(value);
  }
  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={onSubmit}>
        <div className="input-group">
          <input type="text" placeholder=" " onChange={e => setValue(e.target.value)} value={value}/>
          <label className="label">Enter package name...</label>
        </div>
        <button className="btn">Search</button>
      </form>
    </div>
  );
};

export default SearchPackages;
